import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import ProductContext from "./context/ProductContext.jsx"; // Import Product Context provider

createRoot(document.getElementById("root")).render(
  // Wrap App with Router & Product Context
  <BrowserRouter>
    <ProductContext>
      <App />
    </ProductContext>
  </BrowserRouter>,
);
