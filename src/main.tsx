import { BaseLayout } from "@/components/base-layout";
import { DocumentBody } from "@/components/document-body";
import { DocumentationLayout } from "@/components/layout";
import { DocSidebar } from "@/components/sidebar";
import {
  ThemeDataProvider,
  useConfig,
  useToc,
} from "@/components/theme-config";
import { pageContent } from "@/components/page-data";
import { MolCraftsDocThemeProvider } from "@/components/theme-provider";
import * as React from "react";
import { createRoot } from "react-dom/client";

export const MainPage = () => {
  const config = useConfig();
  const toc = useToc();
  const sections = toc.map((item) => ({ id: item.id, title: item.title }));
  const [active, setActive] = React.useState<string>(sections[0]?.id ?? "");
  const color = config.theme_color ?? "purple";
  const activeClass = `bg-${color}-100 text-${color}-800 dark:bg-${color}-900/30 dark:text-${color}-300`;

  return (
    <MolCraftsDocThemeProvider>
      <ThemeDataProvider>
        <BaseLayout>
          <div className="flex gap-6">
            <DocSidebar
              activeClass={activeClass}
              sections={sections}
              activeSectionId={active}
              onSectionClick={setActive}
            />
            <DocumentationLayout>
              <DocumentBody>
                <div dangerouslySetInnerHTML={{ __html: pageContent }} />
              </DocumentBody>
            </DocumentationLayout>
          </div>
        </BaseLayout>
      </ThemeDataProvider>
    </MolCraftsDocThemeProvider>
  );
};

const root = createRoot(document.getElementById("react-root"));

if (root) {
  root.render(<MainPage />);
}
