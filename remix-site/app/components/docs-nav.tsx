import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { 
  Home, 
  Download, 
  Search as SearchIcon, 
  Brain, 
  Terminal, 
  Settings, 
  FileCode, 
  Microscope,
  Wrench,
  Database,
  Bot,
  Compass
} from "lucide-react";

const docsNav = [
  {
    title: "Getting Started",
    icon: <Home className="h-4 w-4" />,
    items: [
      { title: "Overview", href: "/docs", icon: <Compass className="h-4 w-4" /> },
      { title: "Installation", href: "/docs/installation", icon: <Download className="h-4 w-4" /> },
    ],
  },
  {
    title: "Features",
    icon: <Wrench className="h-4 w-4" />,
    items: [
      { title: "Template Discovery", href: "/docs/discovery", icon: <SearchIcon className="h-4 w-4" /> },
      { title: "AI Analysis", href: "/docs/analysis", icon: <Brain className="h-4 w-4" /> },
      { title: "Search Engine", href: "/docs/search", icon: <Database className="h-4 w-4" /> },
    ],
  },
  {
    title: "CLI",
    icon: <Terminal className="h-4 w-4" />,
    items: [
      { title: "Scraping Starters", href: "/docs/cli/scraping", icon: <FileCode className="h-4 w-4" /> },
      { title: "Analyzing Starters", href: "/docs/cli/analyzing", icon: <Microscope className="h-4 w-4" /> },
      { title: "Searching Starters", href: "/docs/cli/searching", icon: <SearchIcon className="h-4 w-4" /> },
    ],
  },
  {
    title: "Reference",
    icon: <Bot className="h-4 w-4" />,
    items: [
      { title: "Configuration", href: "/docs/configuration", icon: <Settings className="h-4 w-4" /> },
      { title: "Analysis Ontology", href: "/docs/ontology", icon: <Brain className="h-4 w-4" /> },
    ],
  },
];

interface DocsNavProps {
  className?: string;
  currentPath: string;
}

export function DocsNav({ className, currentPath }: DocsNavProps) {
  return (
    <nav className={cn("space-y-6", className)}>
      {docsNav.map((section) => (
        <div key={section.title} className="space-y-3">
          <div className="flex items-center gap-2">
            {section.icon}
            <h4 className="font-medium">{section.title}</h4>
          </div>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 hover:underline",
                  currentPath === item.href
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
} 