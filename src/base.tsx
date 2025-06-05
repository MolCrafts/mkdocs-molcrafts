import * as React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("react-root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
