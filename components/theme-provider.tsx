import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import "../src/globals.css";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  color: {
    accent: string;
    hover: string;
    border: string;
  };
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  color: {
    accent: "text-blue-600 dark:text-blue-400",
    hover: "hover:text-blue-700 dark:hover:text-blue-300",
    border: "border-blue-200 dark:border-blue-800",
  },
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const MolCraftsDocThemeProvider = ({
  children,
  defaultTheme = "dark",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
