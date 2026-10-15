import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CartProvider } from "./context/CartProvider";
import { WishlistProvider } from "./context/WishlistContext";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
);