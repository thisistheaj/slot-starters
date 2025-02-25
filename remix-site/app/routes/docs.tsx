import { Outlet, useLocation } from "@remix-run/react";
import { Header } from "~/components/header";
import { DocsNav } from "~/components/docs-nav";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "~/lib/utils";

export default function DocsLayout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="container flex-1">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[220px_1fr]">
          {/* Mobile Drawer Backdrop */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={cn(
              "fixed inset-y-0 left-0 z-40 w-[220px] transform overflow-y-auto bg-[#C6AF91] p-4 shadow-lg transition-transform duration-200 ease-in-out md:static md:transform-none md:rounded-lg md:shadow-none",
              isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}
          >
            <DocsNav currentPath={location.pathname} />
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
} 