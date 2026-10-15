import { createContext, useEffect, useState } from "react";
const WishlistContext = createContext(null);
export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("jaipuri-wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  // Save wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "jaipuri-wishlist",
        JSON.stringify(wishlist)
      );
    } catch (error) {
      console.error("Unable to save wishlist:", error);
    }
  }, [wishlist]);
  // Add a product to wishlist
  const addToWishlist = (product) => {
    if (!product?._id) return;
    setWishlist((prev) => {
      const exists = prev.some(
        (item) => item._id === product._id
      );
      return exists ? prev : [...prev, product];
    });
  };
  // Remove a product from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prev) =>
      prev.filter((item) => item._id !== productId)
    );
  };
  // Toggle favourite on/off
  const toggleWishlist = (product) => {
    if (!product?._id) return;
    setWishlist((prev) => {
      const exists = prev.some(
        (item) => item._id === product._id
      );
      return exists
        ? prev.filter((item) => item._id !== product._id)
        : [...prev, product];
    });
  };
  // Check whether a product is favourited
  const isWishlisted = (productId) =>
    wishlist.some((item) => item._id === productId);
  // Clear all favourites
  const clearWishlist = () => {
    setWishlist([]);
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isWishlisted,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
export default WishlistContext;