// ThemeToggleButton.js
import React, { useState, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { useThemeUI } from "theme-ui";
import useIsMobile from "../context/useIsMobile";
const ThemeToggleButton = () => {
  const isMobile = useIsMobile();
  const { toggleThemeIndex } = useThemeContext();
  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  const customTheme = theme.colors[themeIndex];

  const [hover, setHover] = useState(false);
  const [buttonColor, setButtonColor] = useState(customTheme.background);

  let currentTheme = "";
  if (themeIndex === 0) {
    currentTheme = "light";
  } else if (themeIndex === 1) {
    currentTheme = "dark";
  } else {
    currentTheme = "dracula";
  }

  function determineButtonColor() {
    if (isMobile) {
      setButtonColor(hover ? customTheme.primaryAlt : customTheme.background);
    } else {
      setButtonColor(
        hover ? customTheme.primaryAlt : customTheme.backgroundAlt
      );
    }
  }
  useEffect(() => {
    determineButtonColor();
  }, [hover, isMobile]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="m-[2rem] p-[.5rem] text-[1.5rem] rounded-[2px] h-fit cursor-pointer"
      style={{
        border: `1px solid ${customTheme.primary}`,
        backgroundColor: buttonColor,
        color: customTheme.text,
      }}
      onClick={() => {
        // Do this to trigger the useEffect
        setHover(!hover);
        toggleThemeIndex();
      }}
    >
      <p className="m-0 p-0">{currentTheme}</p>
    </div>
  );
};

export default ThemeToggleButton;
