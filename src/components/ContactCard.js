import React, { useState } from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  CopyOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import { useThemeUI } from "theme-ui";
import { useThemeContext } from "../context/ThemeContext";
export default function ContactCard({ Icon, text, link }) {
  const [hover, setHover] = useState(false);
  const textToCopy = text;
  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  // I decided to do this in an older fashion, I was prompted for permission to access clipboard using the Clipboard API
  const copyToClipboard = () => {
    const textArea = document.createElement("textarea");

    textArea.value = textToCopy;

    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);

    textArea.select();

    try {
      const successful = document.execCommand("copy");
      const msg = successful ? "successful" : "unsuccessful";
      if (successful) {
        message.success("Copied to clipboard");
      } else {
        message.error("Error: Problem copying text");
      }
      console.log("Copying text command was " + msg);
    } catch (err) {
      console.error("Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  };
  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={
        text === "dylantbabcock@outlook.com" || text === "(904)-600-9050"
          ? copyToClipboard
          : null
      }
      className="contact-card"
      href={
        text !== "dylantbabcock@outlook.com" && text !== "(904)-600-9050"
          ? link
          : null
      }
      style={{
        margin: "0",
        padding: "0",
        fontSize: text === "dylantbabcock@outlook.com" ? "1.1rem" : "1.25rem",
        textDecoration: "none",
        height: "fit-content",
        color: theme.colors[themeIndex].text,
        backgroundColor: hover
          ? theme.colors[themeIndex].backgroundAlt
          : theme.colors[themeIndex].background,
        border: `1px solid ${theme.colors[themeIndex].background}`,
        borderRadius: "4px",
        marginBottom: ".25rem",
        padding: ".5rem",
        display: "flex",
        cursor: "pointer",
        justifyContent:
          text === "dylantbabcock@outlook.com" || text === "(904)-600-9050"
            ? "flex-start"
            : "space-between",
      }}
    >
      <div>
        {(text === "dylantbabcock@outlook.com" || text === "(904)-600-9050") &&
        hover ? (
          <CopyOutlined
            style={{
              fontSize: "1.25rem",
              margin: "0",
              paddingRight: ".5rem",
              color: "green",
            }}
          />
        ) : (
          <Icon
            style={{
              fontSize:
                text === "dylantbabcock@outlook.com" ||
                text === "(904)-600-9050"
                  ? "1.25rem"
                  : "1.5rem",
              paddingRight: ".5rem",
              color:
                Icon.render.displayName === "LinkedinOutlined"
                  ? "blue"
                  : theme.colors[themeIndex].text,
            }}
          />
        )}

        {text}
      </div>

      {text === "dylantbabcock@outlook.com" ||
      text === "(904)-600-9050" ? null : hover ? (
        <LinkOutlined />
      ) : null}
    </a>
  );
}
