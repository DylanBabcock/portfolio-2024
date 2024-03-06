import useIsMobile from "../context/useIsMobile";
import React, { useState } from "react";
import { useThemeUI } from "theme-ui";
import { useThemeContext } from "../context/ThemeContext";

export default function SplashSection() {
  const isMobile = useIsMobile();
  const { theme } = useThemeUI();
  const { themeIndex } = useThemeContext();
  const customTheme = theme.colors[themeIndex];

  return (
    <div
      className="flex h-screen w-screen flex-col justify-center items-center"
      style={{
        color: customTheme.text,
        background: `linear-gradient(to right, ${customTheme.backgroundAlt} ${
          isMobile ? "100%" : "30%"
        }, ${customTheme.background} 30%)`,
      }}
    >
      <div className={`${isMobile ? "m-[2rem]" : "m-[8rem]"} flex `}>
        {!isMobile && (
          <img
            className="w-[350px] h-fit"
            src={`${process.env.PUBLIC_URL}/Assets/cat_desk.svg`}
            alt="Cat desk"
          />
        )}
        <div className="m-0 ml-[2rem] max-w-[400px]">
          <h2 className="m-0 mb-[1rem] text-[3rem]">
            Hello <span className="text-[2rem]">👋</span>
          </h2>
          <p className="m-0 text-[2rem]">
            I am a recent IT graduate who loves to build, tinker, and transform
            ideas into some sort of reality.
          </p>
          <p className="text-[1rem]">a.k.a. I like to build things</p>
        </div>
      </div>
    </div>
  );
}
