import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { ThemeProvider } from "./styles/ThemeProvider";
import "./styles/global.css";
import { GlobalProvider } from "./context/GlobalContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);
