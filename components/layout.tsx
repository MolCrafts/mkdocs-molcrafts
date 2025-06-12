import type { ReactNode } from "react";

interface DocumentationLayoutProps {
  children?: ReactNode;
}

export const DocumentationLayout = ({ children }: DocumentationLayoutProps) => {
  return <div className="prose dark:prose-invert max-w-none">{children}</div>;
};

export interface NotFoundLayoutProps {
  children?: ReactNode;
}

export const NotFoundLayout = ({ children }: NotFoundLayoutProps) => {
  return (
    <div className="flex items-center justify-center py-20">{children}</div>
  );
};
