import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter to enable routing

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter enables routing in the entire app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
