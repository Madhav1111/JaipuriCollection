import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CartProvider } from "./context/CartProvider";
import ToastProvider from "./context/ToastProvider";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ToastProvider>
  </React.StrictMode>,
);