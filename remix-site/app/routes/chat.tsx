import { useState, useEffect } from "react";
import { Header } from "~/components/header";
import { MessageSquare, Send, Sparkles, Brain } from "lucide-react";
import { cn } from "~/lib/utils";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true
});

async function contextualizeQuestion(messages: Message[], currentQuestion: string) {
  const recentMessages = messages.slice(-5); // Get last 5 messages for context
  
  const prompt = `Given the following chat history and a new question, rephrase the question to include relevant context from the conversation. The rephrased question should be self-contained and make sense on its own.

Chat history:
${recentMessages.map(m => `${m.role}: ${m.content}`).join('\n')}

New question: "${currentQuestion}"

Rephrase the question to include context:`;

  const { OpenAI } = await import("openai");
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  return response.choices[0]?.message?.content || currentQuestion;
}

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

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const input = formData.get("input") as string;
  const mode = formData.get("mode") as "standard" | "expert";
  const history = JSON.parse(formData.get("history") as string) as Message[];

  try {
    // Contextualize the question based on chat history
    const contextualizedQuestion = await contextualizeQuestion(history, input);
    
    // Call the appropriate API endpoint with the contextualized question
    const endpoint = mode === "expert" ? "/api/recommendation/expert" : "/api/recommendation";
    const url = new URL(request.url);
    const response = await fetch(`${url.origin}${endpoint}?question=${encodeURIComponent(contextualizedQuestion)}`);
    const data = await response.json();

    return json({ success: true, recommendation: data.recommendation });
  } catch (error) {
    console.error("Chat action error:", error);
    return json(
      { success: false, error: "Failed to process your request" },
      { status: 500 }
    );
  }
}

function MessageContent({ content }: { content: string }) {
  const html = marked(content);

  return (
    <div 
      className="prose prose-sm max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

type ActionData = {
  success: boolean;
  recommendation?: string;
  error?: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const fetcher = useFetcher<ActionData>();
  const [mode, setMode] = useState<"standard" | "expert">("standard");

  const isLoading = fetcher.state !== "idle";

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

    const formData = new FormData();
    formData.append("input", input);
    formData.append("mode", mode);
    formData.append("history", JSON.stringify(messages));

    fetcher.submit(formData, { method: "post" });
  }

  useEffect(() => {
    if (fetcher.data && fetcher.state === "idle") {
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: fetcher.data.success && fetcher.data.recommendation 
          ? fetcher.data.recommendation 
          : "Sorry, I encountered an error while processing your request.",
        mode
      };
      setMessages(prev => [...prev, assistantMessage]);
    }
  }, [fetcher.data, fetcher.state, mode]);

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
            <fetcher.Form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
              <div className="container">
                <div className="mx-auto max-w-3xl space-y-4 md:space-y-0 md:flex md:gap-4">
                  {/* Mode Toggle */}
                  <div className="flex rounded-lg border bg-muted p-1 md:w-auto w-full">
                    {modeOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setMode(option.value)}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors flex-1 md:flex-initial justify-center",
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
            </fetcher.Form>
          </div>
        </div>
      </main>
    </div>
  );
} 