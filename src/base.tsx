import * as React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./base.css";

const root = createRoot(document.getElementById("react-root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
