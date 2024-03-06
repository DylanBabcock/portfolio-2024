import React, { useState } from "react";
import { CopyOutlined, LinkOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useThemeUI } from "theme-ui";
import { useThemeContext } from "../context/ThemeContext";
export default function ContactCard({ Icon, text, link }) {
  const [hover, setHover] = useState(false);
  const textToCopy = text;
  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  const customTheme = theme.colors[themeIndex];

  // I decided to use an older solution I found, because I was prompted for permission to access clipboard using the Clipboard API which I didn't like
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
      href={
        text !== "dylantbabcock@outlook.com" && text !== "(904)-600-9050"
          ? link
          : null
      }
      className="contact-card m-0  no-underline h-fit mb-[.25rem] p-[.5rem] flex cursor-pointer justify-between"
      style={{
        fontSize: text === "dylantbabcock@outlook.com" ? "1.1rem" : "1.25rem",
        color: customTheme.text,
        backgroundColor: hover
          ? customTheme.backgroundAlt
          : customTheme.background,
        border: `1px solid ${customTheme.background}`,
        borderRadius: "4px",
      }}
    >
      <div>
        <Icon
          style={{
            fontSize:
              text === "dylantbabcock@outlook.com" || text === "(904)-600-9050"
                ? "1.25rem"
                : "1.5rem",
            paddingRight: ".5rem",
            color:
              Icon.render.displayName === "LinkedinOutlined"
                ? "blue"
                : customTheme.text,
          }}
        />

        {text}
      </div>

      {hover &&
        (text === "dylantbabcock@outlook.com" || text === "(904)-600-9050") && (
          <CopyOutlined />
        )}

      {text !== "dylantbabcock@outlook.com" &&
        text !== "(904)-600-9050" &&
        hover && <LinkOutlined />}
    </a>
  );
}
