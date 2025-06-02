

import React from "react";
import { createRoot } from "react-dom/client";

const MainComponent = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
            <h1>Welcome to ShadCN UI</h1>
            <p>Explore the power of modern UI components.</p>
            <div style={{ marginTop: "20px" }}>
                <p>This is the main content area where MkDocs content will be rendered.</p>
            </div>
        </div>
    );
};

// 渲染React组件到DOM
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<MainComponent />);
}