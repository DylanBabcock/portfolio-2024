import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useThemeContext } from "../context/ThemeContext";
import { useThemeUI } from "theme-ui";
export default function Header() {
  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  const customTheme = theme.colors[themeIndex];

  return (
    <div
      className={`flex absolute w-full h-[5rem] justify-between `}
      style={{
        color: customTheme.text,
      }}
    >
      <h2
        className={`m-0 mt-[2rem] ml-[10%] text-[3rem] self-center font-thin `}
        style={{
          color: customTheme.primary,
        }}
      >
        Dylan
      </h2>

      <ThemeSwitcher />
    </div>
  );
}
