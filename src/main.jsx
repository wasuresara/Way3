import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

export function LanguageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App language="de" />} />
        <Route path="/en" element={<App language="en" />} />
        <Route path="/uk" element={<App language="uk" />} />
        <Route path="/ru" element={<App language="ru" />} />
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
