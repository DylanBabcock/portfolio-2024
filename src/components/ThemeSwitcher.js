// ThemeToggleButton.js
import React, { useState, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { useThemeUI } from "theme-ui";
import useIsMobile from "../context/useIsMobile";
const ThemeToggleButton = () => {
  const { toggleThemeIndex } = useThemeContext();
  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  const [hover, setHover] = useState(false);
  const isMobile = useIsMobile();
  const [buttonColor, setButtonColor] = useState(
    theme.colors[themeIndex].background
  );
  let currentTheme = "";
  if (themeIndex === 0) {
    currentTheme = "light";
  } else if (themeIndex === 1) {
    currentTheme = "dark";
  } else {
    currentTheme = "dracula";
  }
  useEffect(() => {
    if (isMobile) {
      setButtonColor(
        hover
          ? theme.colors[themeIndex].primary
          : theme.colors[themeIndex].background
      );
    } else {
      setButtonColor(
        hover
          ? theme.colors[themeIndex].primary
          : theme.colors[themeIndex].backgroundAlt
      );
    }
  }, [hover, isMobile]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        margin: "2rem",
        padding: ".5rem",
        fontSize: "1.5rem",
        border: `1px solid ${theme.colors[themeIndex].primary}`,
        borderRadius: "2px",
        height: "fit-content",
        cursor: "pointer",
        backgroundColor: buttonColor,
        color: theme.colors[themeIndex].text,
      }}
      onClick={toggleThemeIndex}
    >
      <p style={{ margin: "0", padding: "0" }}>{currentTheme}</p>
    </div>
  );
};

export default ThemeToggleButton;
