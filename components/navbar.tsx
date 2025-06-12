import { LogoIcon } from "./Icons";
import { ModeToggle } from "./mode-toggle";

export interface RouteProps {
  href: string;
  label: string;
}

interface DocsNavbarProps {
  site_name: string;
  nav?: RouteProps[];
}

export const DocsNavbar = ({ site_name, nav = [] }: DocsNavbarProps) => {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-md py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <LogoIcon />
          <span className="font-bold text-lg">{site_name}</span>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-3">
            {nav.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className="text-sm font-medium hover:underline"
              >
                {route.label}
              </a>
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
