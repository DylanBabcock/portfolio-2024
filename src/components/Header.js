import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useThemeContext } from "../context/ThemeContext";
import { useThemeUI } from "theme-ui";
export default function Header() {
  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "70px",
        justifyContent: "space-between",
        color: theme.colors[themeIndex].text,
      }}
    >
      <h2
        style={{
          margin: "2rem 0 0 10%",
          fontSize: "3rem",
          alignSelf: "center",
          fontWeight: 100,
          color: theme.colors[themeIndex].primary,
        }}
      >
        Dylan
      </h2>

      <ThemeSwitcher />
    </div>
  );
}
