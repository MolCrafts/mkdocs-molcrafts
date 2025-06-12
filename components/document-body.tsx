import type { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

interface DocumentBodyProps {
  children?: ReactNode;
}

export const DocumentBody = ({ children }: DocumentBodyProps) => {
  return (
    <Card className="flex-1">
      <CardContent>
        <div className="prose dark:prose-invert max-w-none">{children}</div>
      </CardContent>
    </Card>
  );
};
