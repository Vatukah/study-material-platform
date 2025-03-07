import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/index.css";
import App from "./App.jsx";
import ThemeProvider from "./contexts/ThemeContext/themeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <BrowserRouter>
    <ThemeProvider >
      <App />
    </ThemeProvider>
    </BrowserRouter>
  
  </StrictMode>
);
