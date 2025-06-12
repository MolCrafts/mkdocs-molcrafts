import type { ReactNode } from "react";
import { DocsFooter } from "./footer";
import { DocsNavbar, type RouteProps } from "./navbar";
import { useConfig } from "./theme-config";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const config = useConfig();

  const normalizeRoutes = (items: typeof config.nav): RouteProps[] => {
    if (!items) return [];
    return items
      .filter((item) => typeof item.url === "string")
      .map((item) => ({ href: item.url as string, label: item.title }));
  };

  const routes = normalizeRoutes(config.nav);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DocsNavbar site_name={config.site_name} nav={routes} />
      <main className="flex-1 container mx-auto px-4 pt-4">{children}</main>
      <DocsFooter site_name={config.site_name} />
    </div>
  );
};
