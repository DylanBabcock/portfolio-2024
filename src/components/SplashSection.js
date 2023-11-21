import useIsMobile from "../context/useIsMobile";
import React, { useState } from "react";
import { useThemeUI } from "theme-ui";
import { useThemeContext } from "../context/ThemeContext";

export default function SplashSection() {
  const isMobile = useIsMobile();
  const { theme } = useThemeUI();
  const { themeIndex } = useThemeContext();
  console.log("indexxx");
  console.log(themeIndex);
  return (
    <div
      style={{
        display: "flex",
        background: `linear-gradient(to right, ${
          theme.colors[themeIndex].backgroundAlt
        } ${isMobile ? "100%" : "30%"}, ${
          theme.colors[themeIndex].background
        } 30%)`,
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: theme.colors[themeIndex].text,
      }}
    >
      <div style={{ margin: isMobile ? "2rem" : "8rem", display: "flex" }}>
        {!isMobile ? (
          <img
            src={`${process.env.PUBLIC_URL}/Assets/cat_desk.svg`}
            alt="Cat desk"
            style={{ width: "350px", height: "fit-content" }}
          />
        ) : null}
        <div style={{ margin: "0 0 0 2rem", maxWidth: "400px" }}>
          <p style={{ margin: "0 0 1rem 0", fontSize: "3rem" }}>
            Hello <span style={{ fontSize: "2rem" }}>👋</span>
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "2rem",
            }}
          >
            I am a recent IT graduate who loves to build, tinker, and transform
            ideas into some sort of reality.
          </p>
          <p style={{ fontSize: "1rem" }}>a.k.a. I like to build things</p>
        </div>
      </div>
    </div>
  );
}
