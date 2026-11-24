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
        <Route path="/beta" element={<App language="de" beta />} />
        <Route path="/en" element={<App language="en" />} />
        <Route path="/en/beta" element={<App language="en" beta />} />
        <Route path="/uk" element={<App language="uk" />} />
        <Route path="/uk/beta" element={<App language="uk" beta />} />
        <Route path="/ru" element={<App language="ru" />} />
        <Route path="/ru/beta" element={<App language="ru" beta />} />
        <Route path="/pl" element={<App language="pl" />} />
        <Route path="/pl/beta" element={<App language="pl" beta />} />
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
