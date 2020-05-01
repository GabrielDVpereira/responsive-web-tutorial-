import React, { createContext, useContext, useState, useEffect } from "react";

const WindowDimensionCtx = createContext();

export default function WindowDimentionsProvider({ children }) {
  const [dimentions, setDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setDimentions({
        width: window.width,
        height: window.height,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowDimensionCtx.Provider value={dimentions}>
      {children}
    </WindowDimensionCtx.Provider>
  );
}

export const useWindowDimentions = () => useContext(WindowDimensionCtx);
