import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { SessionProvider } from "./context/SessionProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <SessionProvider>
    <App />
  </SessionProvider>
);
