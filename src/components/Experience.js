import React, { useState } from "react";
import { Divider, Tag } from "antd";
import useIsMobile from "../context/useIsMobile";
import { useThemeContext } from "../context/ThemeContext";
import { useThemeUI } from "theme-ui";
export default function Experience() {
  const isMobile = useIsMobile();
  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  return (
    <div
      style={{
        height: "calc(100vh + 200px)",
        backgroundColor: theme.colors[themeIndex].backgroundAlt3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? "1rem 1rem 1rem 1rem" : "1rem 4rem 4rem 4rem",
        overflow: "auto",
        overflowX: "hidden",
        color: theme.colors[themeIndex].text,
      }}
    >
      <h1
        style={{ fontWeight: 100, fontSize: isMobile ? "2.5rem" : "3.25rem" }}
      >
        Experience 💼
      </h1>

      <div
        style={{
          display: "flex",
          width: isMobile ? "100%" : "90%",
          maxWidth: "1500px",
          justifyContent: "space-between",
          padding: "1rem",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "flex-start",
          backgroundColor: theme.colors[themeIndex].background,
          borderRadius: "3px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "1.5rem",
          }}
        >
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Blue Cross Blue Shield of Florida
          </p>
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: 500,
            }}
          >
            Intern III <br />
            <Tag color="blue" style={{ fontSize: "1.1rem" }}>
              05/15/2023 -{" "}
              <span style={{ fontSize: "1rem", fontStyle: "italic" }}>
                current
              </span>
            </Tag>
          </p>
        </div>
        <div style={{ display: "flex", maxWidth: isMobile ? "100%" : "70%" }}>
          {isMobile ? null : (
            <p
              style={{
                margin: "0",
                padding: "0 1rem 0 0",
                fontSize: "1.5rem",
                color: theme.colors[themeIndex].primary,
              }}
            >
              ___________
            </p>
          )}
          <p
            style={{
              margin: isMobile ? ".5rem 0 0 0" : "0",
              padding: ".25rem",
              fontSize: "1.5rem",
              borderRadius: "5px",
              fontWeight: 350,
            }}
          >
            {isMobile
              ? "As a Software Development Intern with the Advanced Technology Solutions team, I am actively involved in developing innovative solutions for our healthcare applications. My role is predominantly focused on helping solve business problems with web prototypes"
              : "As a Software Development Intern with the Advanced Technology Solutions team, I am actively involved in developing innovative solutions for our healthcare applications. My role is predominantly focused on helping solve business problems with web prototypes, using NextJs alongside modern component and theme libraries to create our web applications. We leverage Apollo GraphQL and MongoDB for data management. Additionally, we're exploring the potential use cases of large language models like chatGPT."}
          </p>
        </div>
      </div>

      <Divider
        style={{
          backgroundColor: theme.colors[themeIndex].primary,
          marginTop: "3rem",
        }}
      />

      <h1
        style={{ fontWeight: 100, fontSize: isMobile ? "2.5rem" : "3.25rem" }}
      >
        Education 🎓
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          margin: isMobile ? "0 0 1rem 0" : "1rem",
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "100%" : "90%",
          maxWidth: "1500px",
          backgroundColor: theme.colors[themeIndex].background,
          borderRadius: "3px",
        }}
      >
        <div>
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            University of Phoenix
          </p>
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: 500,
            }}
          >
            B.S. Information Technology <br />
            <Tag color="blue" style={{ fontSize: "1.1rem" }}>
              Feb. 2022 -{" "}
              <span style={{ fontStyle: "italic", fontSize: "1rem" }}>
                Current
              </span>
            </Tag>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            width: isMobile ? "100%" : "auto",
            maxWidth: isMobile ? "100%" : "70%",
          }}
        >
          {isMobile ? null : (
            <p
              style={{
                margin: "0",
                padding: "0 1rem 0 0",
                fontSize: "1.5rem",
                color: theme.colors[themeIndex].primary,
              }}
            >
              ___________
            </p>
          )}
          <p
            style={{
              margin: isMobile ? ".25rem 0 0 0" : "0",
              padding: ".25rem",
              fontSize: "1.5rem",
              borderRadius: "5px",
              width: isMobile ? "100%" : "auto",
              fontWeight: 350,
            }}
          >
            {isMobile
              ? " This degree covers topics in ethical hacking, coding, and network design."
              : "This degree covers topics in ethical hacking, coding, and network design. So far the courses have been focused around cyber security, and OOP scripting."}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: isMobile ? "100%" : "90%",
          maxWidth: "1500px",
          margin: isMobile ? "1rem 0 1rem 0" : "1rem",
          justifyContent: "space-between",
          padding: "1rem",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "flex-start",
          backgroundColor: theme.colors[themeIndex].background,
          borderRadius: "3px",
        }}
      >
        <div>
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Woz U
          </p>

          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: 500,
            }}
          >
            .NET BootCamp
            <br />
            <Tag color="green" style={{ fontSize: "1.1rem" }}>
              <span style={{ fontStyle: "italic", fontSize: "1rem" }}>
                Complete{" "}
              </span>
              - Jan. 2022
            </Tag>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: isMobile ? "100%" : "70%",
            fontSize: "1.5rem",
          }}
        >
          {isMobile ? null : (
            <p
              style={{
                margin: "0",
                padding: "0 1rem 0 0",
                color: theme.colors[themeIndex].primary,
              }}
            >
              ___________
            </p>
          )}
          <p
            style={{
              margin: isMobile ? ".25rem 0 0 0" : "0",
              padding: isMobile ? ".25rem" : "0",
              borderRadius: "5px",
              fontWeight: 350,
            }}
          >
            {isMobile
              ? "This was a 9 week bootcamp where we went over a wide range of technologies but with a focus on .NET development."
              : "This was a 9 week bootcamp where we went over a wide range of technologies but with a focus on .NET development. This was great for really drilling down the concepts of OOP and getting a better understanding of the SDLC"}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: isMobile ? "100%" : "90%",
          maxWidth: "1500px",
          margin: isMobile ? "1rem 0 1rem 0" : "1rem",
          justifyContent: "space-between",
          padding: "1rem",
          flexDirection: isMobile ? "column" : "row",
          borderRadius: "3px",
          backgroundColor: theme.colors[themeIndex].background,
        }}
      >
        <div>
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            St. John's River College
          </p>
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: 500,
            }}
          >
            A.S. Computer Programming <br />
            <Tag color="green" style={{ fontSize: "1.1rem" }}>
              <span style={{ fontSize: "1rem", fontStyle: "italic" }}>
                Complete
              </span>{" "}
              - May 2021
            </Tag>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: isMobile ? "100%" : "70%",
            fontSize: "1.5rem",
          }}
        >
          {isMobile ? null : (
            <p
              style={{
                margin: "0",
                padding: "0 1rem 0 0",
                color: theme.colors[themeIndex].primary,
              }}
            >
              ___________
            </p>
          )}
          <p
            style={{
              margin: isMobile ? ".25rem 0 0 0" : "0",
              padding: isMobile ? ".25rem" : "0",
              borderRadius: "5px",
              fontWeight: 350,
            }}
          >
            {isMobile
              ? "During this time I was introduced wo web development, OOP in many languages, proper research and documentation, and more."
              : "This had a mixture of general first year college classes, and some introduction technology classes. During this time I was introduced to web development, OOP in many different languages, proper research and documentation, and much more."}
          </p>
        </div>
      </div>
    </div>
  );
}
