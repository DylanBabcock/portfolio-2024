import React, { useState } from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import ContactCard from "../components/ContactCard";
import useIsMobile from "../context/useIsMobile";
import { useThemeContext } from "../context/ThemeContext";
import { useThemeUI } from "theme-ui";
export default function ContactSection() {
  const isMobile = useIsMobile();

  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  const customTheme = theme.colors[themeIndex];

  return (
    <div
      className="h-screen w-screen fixed z-[-1] flex flex-col justify-center items-center"
      style={{
        backgroundColor: customTheme.backgroundAlt,
        color: customTheme.text,
      }}
    >
      <div>
        <p className="m-0 p-0 text-[4rem] fixed">🎉</p>

        <div
          className="flex justify-between"
          style={{
            border: `3px solid ${customTheme.primary}`,
            backgroundColor: customTheme.background,
            borderRadius: isMobile ? "25px" : "2px",
            height: isMobile ? "600px" : "400px",
            width: isMobile ? "600px" : "800px",
            maxWidth: isMobile ? "320px" : "800px",
            minWidth: isMobile ? "200px" : "600px",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <img
            src={
              isMobile
                ? `${process.env.PUBLIC_URL}/Assets/DylanSmall.png`
                : `${process.env.PUBLIC_URL}/Assets/DylanMe.png`
            }
            style={{
              height: isMobile ? "auto" : "100%",
              width: isMobile ? "100%" : "500px",
              borderRadius: isMobile ? "20px" : "0px",
              borderBottomRightRadius: isMobile ? "5px" : "0",
              borderBottomLeftRadius: isMobile ? "5px" : "0",
            }}
          />
          <div
            className="flex flex-col"
            style={{
              padding: isMobile ? "1.5rem .5rem 4rem .5rem" : "1.5rem",
              width: isMobile ? "auto" : "100%",
            }}
          >
            <p className="m-0 p-0 pb-[1rem] text-[1.75rem] font-normal self-center">
              Contact Me 💬
            </p>
            <ContactCard
              Icon={LinkedinOutlined}
              text={"LinkedIn Profile"}
              link={"https://www.linkedin.com/in/dylan-babcock-profile/"}
            />
            <ContactCard
              Icon={GithubOutlined}
              text={"GitHub"}
              link={"https://github.com/DylanBabcock"}
            />
            <ContactCard
              Icon={MailOutlined}
              text={"dylantbabcock@outlook.com"}
              link={"none"}
            />
            <ContactCard
              Icon={PhoneOutlined}
              text={"(904)-600-9050"}
              link={"none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
