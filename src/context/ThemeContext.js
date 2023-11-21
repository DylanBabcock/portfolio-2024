// ThemeContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context
export const ThemeContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  // Function to cycle through 0, 1, 2
  const toggleThemeIndex = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % 3);
  };
  return (
    <ThemeContext.Provider value={{ themeIndex, toggleThemeIndex }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using this context
export const useThemeContext = () => useContext(ThemeContext);
