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
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.colors[themeIndex].backgroundAlt,
        position: "fixed",
        zIndex: -1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: theme.colors[themeIndex].text,
      }}
    >
      <div>
        <p
          style={{
            margin: "0",
            padding: "0",
            fontSize: "4rem",
            position: "fixed",
          }}
        >
          🎉
        </p>

        <div
          style={{
            border: `3px solid ${theme.colors[themeIndex].primary}`,
            backgroundColor: theme.colors[themeIndex].background,
            borderRadius: isMobile ? "25px" : "2px",

            height: isMobile ? "600px" : "400px",
            width: isMobile ? "600px" : "800px",
            maxWidth: isMobile ? "320px" : "800px",
            minWidth: isMobile ? "200px" : "600px",
            display: "flex",
            justifyContent: "space-between",
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
              borderBottomRightRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          />
          <div
            style={{
              padding: isMobile ? "1.5rem .5rem 4rem .5rem" : "1.5rem",
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "auto" : "100%",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "0 0 1rem 0",
                fontSize: "1.75rem",
                fontWeight: 400,
                alignSelf: "center",
              }}
            >
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
