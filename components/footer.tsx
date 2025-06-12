interface DocsFooterProps {
  site_name: string;
}

export const DocsFooter = ({ site_name }: DocsFooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {site_name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
