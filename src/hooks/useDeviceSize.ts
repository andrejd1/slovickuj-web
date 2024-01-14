import { useEffect, useState } from "react";

export const useDeviceSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
