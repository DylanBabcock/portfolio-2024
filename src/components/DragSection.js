import React, { useState } from "react";
import useIsMobile from "../context/useIsMobile";

import Draggable from "react-draggable";
import { GithubOutlined, HolderOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { useThemeUI } from "theme-ui";
import { useThemeContext } from "../context/ThemeContext";
export default function DragSection() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const { theme } = useThemeUI();
  const { themeIndex } = useThemeContext();
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        height: isMobile ? "calc(100vh + 100px)" : "100vh",
        backgroundColor: theme.colors[themeIndex].backgroundAlt2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "4rem", fontWeight: 100, margin: "0" }}>
        Projects
      </h2>
      <br />
      <br />
      <Draggable
        defaultPosition={{ x: isMobile ? 10 : 100, y: 0 }}
        bounds="parent"
      >
        <div style={{ display: "flex" }}>
          <HolderOutlined
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            style={{
              fontSize: "2rem",
              cursor: "grab",
              height: "fit-content",
              alignSelf: "center",
            }}
          />

          <div
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            style={{
              width: "fit-content",
              maxWidth: isMobile ? "300px" : "400px",
              height: "fit-content",
              border: `3px solid ${theme.colors[themeIndex].primary}`,
              borderRadius: "5px",
              padding: "1rem",
              cursor: "grab",
              backgroundColor: hover1
                ? "black"
                : theme.colors[themeIndex].backgroundAlt2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 0 .25rem 0",
              }}
            >
              <h2
                style={{
                  margin: "0 0 0 0",
                  padding: "0 0 0 0",
                  fontWeight: 100,
                }}
              >
                Mask Detection 😷
              </h2>
              <a
                style={{ color: theme.colors[themeIndex].textAlt }}
                href="https://github.com/DylanBabcock/Hackathon2021"
              >
                <GithubOutlined
                  style={{
                    alignSelf: "center",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>

            <p
              style={{
                margin: "0",
                padding: "0",
                fontWeight: 100,
                fontSize: "1.25rem",
              }}
            >
              {isMobile
                ? "Hackathon event where a small team and I built out a mask detection app."
                : "Hackathon event where over a weekend, a small team and I built a mask detection app. The UI was simple but we got our first experience with AI using TensorFlow.js."}
            </p>
          </div>
        </div>
      </Draggable>
      <br />
      <Draggable
        defaultPosition={{ x: isMobile ? -10 : -100, y: 0 }}
        bounds="parent"
      >
        <div style={{ display: "flex" }}>
          <HolderOutlined
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
            style={{
              fontSize: "2rem",
              cursor: "grab",
              height: "fit-content",
              alignSelf: "center",
            }}
          />
          <div
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
            style={{
              width: "fit-content",
              height: "fit-content",
              minHeight: "120px",
              maxWidth: isMobile ? "300px" : "450px",
              minHeight: "130px",
              border: `3px solid ${theme.colors[themeIndex].primary}`,
              borderRadius: "5px",
              padding: "1rem",
              cursor: "grab",
              backgroundColor: hover2
                ? "black"
                : theme.colors[themeIndex].backgroundAlt2,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 0 .5rem 0",
              }}
            >
              <h2
                style={{
                  margin: "0 0 0 0",
                  padding: "0 0 0 0",
                  fontWeight: 100,
                }}
              >
                Price-feed-scraper 💳
              </h2>
              <a
                style={{ color: theme.colors[themeIndex].textAlt }}
                href="https://github.com/DylanBabcock/price-feed-scraper"
              >
                <GithubOutlined
                  style={{
                    alignSelf: "center",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>

            <p
              style={{
                margin: "0",
                padding: "0",
                fontWeight: 100,
                fontSize: "1.25rem",
              }}
            >
              Scrapes the web for the top 10 crypto currencies and their
              relevant data.
            </p>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Tag style={{ height: "fit-content" }} color="#bd2a33">
                LIVE
              </Tag>
              {!isMobile ? (
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontWeight: 100,
                  }}
                >
                  Comming soon <br /> 🤦
                  {/* BTC: <br /> $36,534.80 */}
                </p>
              ) : (
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontWeight: 100,
                  }}
                >
                  Comming soon <br /> 🤦
                  {/* BTC: $36,534.80 */}
                </p>
              )}
            </div>
          </div>
        </div>
      </Draggable>
      <br />

      <Draggable
        defaultPosition={{ x: isMobile ? 10 : 100, y: 0 }}
        bounds="parent"
      >
        <div style={{ display: "flex" }}>
          <HolderOutlined
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
            style={{
              fontSize: "2rem",
              cursor: "grab",
              height: "fit-content",
              alignSelf: "center",
            }}
          />
          <div
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
            style={{
              width: "fit-content",
              maxWidth: isMobile ? "300px" : "500px",

              height: "fit-content",
              border: `3px solid ${theme.colors[themeIndex].primary}`,
              borderRadius: "5px",
              padding: "1rem",
              cursor: "grab",
              backgroundColor: hover3
                ? "black"
                : theme.colors[themeIndex].backgroundAlt2,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 0 .5rem 0",
              }}
            >
              <h2
                style={{
                  margin: "0 0 0 0",
                  padding: "0 0 0 0",
                  fontWeight: 100,
                }}
              >
                Sim-Earth 🌎
              </h2>
              {isMobile ? "🤦" : "Comming soon 🤦"}
            </div>

            <p
              style={{
                margin: "0",
                padding: "0",
                fontWeight: 100,
                fontSize: "1.25rem",
              }}
            >
              {isMobile
                ? "Sim-Earth inspired game (in development). All entities and images are generated from the GPT and DALL·E APIs."
                : "This is a Sim-Earth inspired game I have been working on! You get to adjust Earth's parameters and see how it might evolve in different conditions."}
              {isMobile
                ? null
                : "The images and descriptions of the creatures/evolutions are all created by the GPT and DALL·E API."}
            </p>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
