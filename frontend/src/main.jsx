import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HeadProvider } from "react-head";
import { AuthProvider } from "./api/authContext.js";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HeadProvider>
          <App />
        </HeadProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
