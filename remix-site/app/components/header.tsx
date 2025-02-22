import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { BookOpen, Github, Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link 
          to="/" 
          className="mr-6 flex items-center space-x-2"
        >
          <span className="font-bold">Slot Starters</span>
        </Link>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center gap-4">
            <Link
              to="/explore"
              className={cn(
                "flex items-center gap-1 hover:text-foreground/80",
                "transition-colors"
              )}
            >
              <Search className="h-4 w-4" />
              <span>Explore</span>
            </Link>
            <Link
              to="/docs"
              className={cn(
                "flex items-center gap-1 hover:text-foreground/80",
                "transition-colors"
              )}
            >
              <BookOpen className="h-4 w-4" />
              <span>Docs</span>
            </Link>
            <a
              href="https://github.com/thisistheaj/slot-starters"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-foreground/80 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
} 