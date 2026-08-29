import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  // Save scroll position before leaving a page
  useEffect(() => {
    return () => {
      sessionStorage.setItem(
        `scroll-${location.pathname}`,
        window.scrollY.toString()
      );
    };
  }, [location.pathname]);

  // Restore or scroll to top
  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll-${location.pathname}`);

    if (saved) {
      window.scrollTo({
        top: Number(saved),
        behavior: "instant",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;