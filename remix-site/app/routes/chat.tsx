import { useState, useEffect } from "react";
import { Header } from "~/components/header";
import { MessageSquare, Send, Sparkles, Brain } from "lucide-react";
import { cn } from "~/lib/utils";
import type { MetaFunction } from "@remix-run/node";
import { marked } from 'marked';

export const meta: MetaFunction = () => {
  return [
    { title: "Chat - Slot" },
    { name: "description", content: "Chat with our AI to find the perfect starter template" },
  ];
};

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  mode?: "standard" | "expert";
};

type ModeOption = {
  value: "standard" | "expert";
  label: string;
  icon: JSX.Element;
};

const modeOptions: ModeOption[] = [
  {
    value: "standard",
    label: "Standard",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    value: "expert",
    label: "Expert",
    icon: <Brain className="h-4 w-4" />,
  },
];

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true
});

function MessageContent({ content }: { content: string }) {
  const html = marked(content);

  return (
    <div 
      className="prose prose-sm max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"standard" | "expert">("standard");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      mode
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const endpoint = mode === "expert" ? "/api/recommendation/expert" : "/api/recommendation";
      const response = await fetch(`${endpoint}?question=${encodeURIComponent(input)}`);
      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.recommendation,
        mode
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error while processing your request.",
        mode
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-24">
        <div className="container py-8">
          <div className="mx-auto max-w-3xl">
            {/* Messages */}
            <div className="space-y-4 mb-8">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                  <h2 className="text-lg font-semibold mb-2">Welcome to Slot Chat</h2>
                  <p className="text-muted-foreground">
                    Ask me about finding the perfect starter template for your project.
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3 rounded-lg p-4",
                      message.role === "assistant" ? "bg-muted/50" : ""
                    )}
                  >
                    {message.role === "assistant" ? (
                      message.mode === "expert" ? (
                        <Brain className="h-6 w-6 flex-shrink-0" />
                      ) : (
                        <Sparkles className="h-6 w-6 flex-shrink-0" />
                      )
                    ) : (
                      <MessageSquare className="h-6 w-6 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2">
                        {message.role === "assistant"
                          ? `AI ${message.mode === "expert" ? "Expert" : "Assistant"}`
                          : "You"}
                      </p>
                      <MessageContent content={message.content} />
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
              <div className="container">
                <div className="mx-auto max-w-3xl flex gap-4">
                  {/* Mode Toggle */}
                  <div className="flex rounded-lg border bg-muted p-1">
                    {modeOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setMode(option.value)}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                          mode === option.value
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                        )}
                      >
                        {option.icon}
                        {option.label}
                      </button>
                    ))}
                  </div>

                  {/* Input Field */}
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about finding a starter template..."
                      className={cn(
                        "w-full rounded-md border bg-background px-4 py-2 pr-10 text-sm",
                        "text-foreground placeholder:text-muted-foreground",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                      )}
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className={cn(
                        "absolute right-2 top-1/2 -translate-y-1/2",
                        "text-muted-foreground hover:text-foreground",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "transition-colors"
                      )}
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 