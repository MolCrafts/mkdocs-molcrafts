import React from "react";
import { createRoot } from "react-dom/client";

const NotFoundComponent = () => {
    return (
        <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            minHeight: "100vh", 
            backgroundColor: "#f8f9fa",
            fontFamily: "Arial, sans-serif"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "400px",
                padding: "2rem",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center"
            }}>
                <h1 style={{ 
                    fontSize: "4rem", 
                    fontWeight: "bold", 
                    color: "#dc3545", 
                    marginBottom: "1rem" 
                }}>
                    404
                </h1>
                <p style={{ 
                    fontSize: "1.125rem", 
                    color: "#6c757d", 
                    marginBottom: "1rem" 
                }}>
                    Oops! The page you are looking for does not exist.
                </p>
                <p style={{ 
                    color: "#6c757d",
                    marginBottom: "1.5rem"
                }}>
                    The page you are looking for does not exist or has been moved.
                </p>
            </div>
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<NotFoundComponent />);
}