import type { ReactNode } from "react";
import { createContext, useContext } from "react";

const configRaw = document.getElementById("mkdocs-config")?.textContent ?? "{}";
const pageRaw = document.getElementById("mkdocs-page")?.textContent ?? "{}";
const tocRaw = document.getElementById("mkdocs-toc")?.textContent ?? "[]";

export interface IThemeConfig {
  site_name: string;
  nav?: Array<{
    title: string;
    url?: string;
    children?: unknown[];
  }>;
  theme_color?: string;
}

export interface IPageData {
  title: string;
}

export interface TocItem {
  id: string;
  title: string;
  children?: TocItem[];
}

export const themeConfig: IThemeConfig = JSON.parse(configRaw);
export const pageData: IPageData = JSON.parse(pageRaw);
export const tocData: TocItem[] = JSON.parse(tocRaw);

export const ConfigContext = createContext<IThemeConfig>(themeConfig);
export const PageContext = createContext<IPageData>(pageData);
export const TocContext = createContext<TocItem[]>(tocData);

export const ThemeDataProvider = ({ children }: { children: ReactNode }) => (
  <ConfigContext.Provider value={themeConfig}>
    <PageContext.Provider value={pageData}>
      <TocContext.Provider value={tocData}>{children}</TocContext.Provider>
    </PageContext.Provider>
  </ConfigContext.Provider>
);

export const useConfig = () => useContext(ConfigContext);
export const usePage = () => useContext(PageContext);
export const useToc = () => useContext(TocContext);
