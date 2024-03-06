import React, { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export const MyProvider = ({ children }) => {
  // Initialize state with theme index from local storage or default to 0
  const [themeIndex, setThemeIndex] = useState(() => {
    const storedThemeIndex = localStorage.getItem("themeIndex");
    return storedThemeIndex !== null ? Number(storedThemeIndex) : 0;
  });

  const toggleThemeIndex = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  // Use useEffect to update local storage whenever themeIndex changes
  useEffect(() => {
    localStorage.setItem("themeIndex", themeIndex);
  }, [themeIndex]);

  return (
    <ThemeContext.Provider value={{ themeIndex, toggleThemeIndex }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
