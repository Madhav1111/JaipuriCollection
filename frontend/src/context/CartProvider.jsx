import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size = "Double", qty = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) =>
          item._id === product._id &&
          item.selectedSize === size
      );

      if (existing) {
        return prevCart.map((item) =>
          item._id === product._id &&
          item.selectedSize === size
            ? {
                ...item,
                quantity: item.quantity + qty,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: qty,
          selectedSize: size,
        },
      ];
    });
  };

  const updateQuantity = (_id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === _id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const removeItem = (_id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item._id !== _id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}