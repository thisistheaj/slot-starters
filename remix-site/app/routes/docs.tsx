import { Outlet, useLocation } from "@remix-run/react";
import { Header } from "~/components/header";
import { DocsNav } from "~/components/docs-nav";

export default function DocsLayout() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="container flex-1">
        <div className="grid grid-cols-[220px_1fr] gap-6 py-8">
          <aside className="fixed w-[220px] overflow-y-auto">
            <DocsNav currentPath={location.pathname} />
          </aside>
          <main className="col-start-2 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
} 