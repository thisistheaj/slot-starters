import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { BookOpen, Github, Search, MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  to: string;
  href?: string;
  icon: JSX.Element;
  label: string;
  external?: boolean;
} | {
  to?: string;
  href: string;
  icon: JSX.Element;
  label: string;
  external: true;
};

const navItems: NavItem[] = [
  {
    to: "/explore",
    icon: <Search className="h-4 w-4" />,
    label: "Explore"
  },
  {
    to: "/chat",
    icon: <MessageSquare className="h-4 w-4" />,
    label: "Chat"
  },
  {
    to: "/docs",
    icon: <BookOpen className="h-4 w-4" />,
    label: "Docs"
  },
  {
    href: "https://github.com/thisistheaj/slot-starters",
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
    external: true
  }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link 
          to="/" 
          className="mr-6 flex items-center space-x-2"
        >
          <span className="font-bold">🕹️ Slot Starters</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center gap-4">
            {navItems.map((item) => 
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-foreground/80 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1 hover:text-foreground/80",
                    "transition-colors"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              )
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
            <nav className="container py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => 
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-foreground/80 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="flex items-center gap-2 hover:text-foreground/80 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 