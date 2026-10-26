import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always move to the top after route navigation
    window.scrollTo(0, 0);

    // Handle browsers that restore scroll asynchronously
    const frame = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, navigationType]);

  return null;
}

export default ScrollToTop;