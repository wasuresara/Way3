import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";
import { detectUserLanguage, redirectToLanguagePath } from "./utils/languageDetection";

// Language detection wrapper component
function LanguageRouter() {
  useEffect(() => {
    // Check and redirect based on browser language on initial load
    redirectToLanguagePath();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App language="de" />} />
        <Route path="/en" element={<App language="en" />} />
        <Route path="/fr" element={<App language="fr" />} />
        <Route path="/es" element={<App language="es" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <LanguageRouter />
  </StrictMode>,
);
