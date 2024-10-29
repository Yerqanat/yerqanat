import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "React-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
