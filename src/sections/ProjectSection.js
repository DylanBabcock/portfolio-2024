import React, { useState, useEffect } from "react";
import useIsMobile from "../context/useIsMobile";

import Draggable from "react-draggable";
import { GithubOutlined, HolderOutlined } from "@ant-design/icons";
import { Tag, message } from "antd";
import { useThemeUI } from "theme-ui";
import { useThemeContext } from "../context/ThemeContext";

export default function ProjectSection() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [topCrypto, setTopCrypto] = useState();

  const isMobile = useIsMobile();

  const { theme } = useThemeUI();
  const { themeIndex } = useThemeContext();
  const customTheme = theme.colors[themeIndex];

  function formatNumberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // Fetch the top crypto currency and its price
  useEffect(() => {
    const apiUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          const formattedPrice = formatNumberWithCommas(data[0].current_price);
          setTopCrypto({
            name: data[0].name,
            price: formattedPrice,
          });
        } else {
          // Handle case where data is empty or not as expected
          throw new Error("No data returned from API");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        message.error("error fetching crypto :(");
      });
  }, []);

  const Project = ({
    title,
    description,
    mobileDescription,
    gitLink,
    hover,
  }) => {
    return (
      <div
        className={`flex w-fit  h-fit p-[1rem] flex-col`}
        style={{
          border: `3px solid ${customTheme.primary}`,
          borderRadius: "5px",
          backgroundColor: hover ? "black" : customTheme.backgroundAlt2,
          maxWidth: isMobile ? "18rem" : "30rem",
        }}
      >
        <div className="flex justify-between m-0 mb-[.25rem]">
          <h2 className="m-0 p-0 font-thin">{title}</h2>
          {title === "Sim-Earth 🌎" ? (
            <div>Comming soon 🤦‍♂️</div>
          ) : (
            <a style={{ color: customTheme.textAlt }} href={gitLink}>
              <GithubOutlined className=" self-center text-[2rem] cursor-pointer" />
            </a>
          )}
        </div>

        <p className="m-0 p-0 font-thin text-[1.25rem]">
          {isMobile ? mobileDescription : description}
        </p>
        {title === "Price-feed-scraper 💳" && (
          <div className="flex flex-col self-end">
            <Tag className="h-fit w-fit" color="#bd2a33">
              LIVE
            </Tag>
            {topCrypto && topCrypto.price && topCrypto.name ? (
              <div className="flex">
                {topCrypto.name}: ${topCrypto.price}
              </div>
            ) : (
              <div>Error fetching monies 😔</div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col relative justify-center items-center max-w-screen text-white  h-fit pb-[4rem]`}
      style={{
        minHeight: isMobile ? "calc(100vh + 100px)" : "100vh",
        backgroundColor: customTheme.backgroundAlt2,
      }}
    >
      <h2 className="text-[4rem] font-thin m-0">Projects</h2>
      <p className="text-[1rem] m-0 p-0 mb-[4rem]">dnd, because why not 😎</p>

      {/* First Project */}

      <Draggable
        handle=".handle1"
        defaultPosition={{ x: isMobile ? 10 : 100, y: 10 }}
        bounds="parent"
      >
        <div className="flex">
          <div
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            className="handle1 h-fit p-2 flex self-center cursor-grab"
          >
            <HolderOutlined className="text-[2rem]  h-fit self-center" />
          </div>
          <Project
            title="Mask Detection 😷"
            description="Hackathon event where over a weekend, a small team and I built a mask detection app. The UI was simple but we got our first experience with AI using TensorFlow.js."
            mobileDescription="Hackathon event where a small team and I built out a mask detection app."
            gitLink="https://github.com/DylanBabcock/Hackathon2021"
            hover={hover1}
          />
        </div>
      </Draggable>

      {/* Second Project */}

      <Draggable
        handle=".handle2"
        defaultPosition={{ x: isMobile ? -10 : -100, y: 30 }}
        bounds="parent"
      >
        <div className="flex" style={{ display: "flex" }}>
          <div
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
            className="handle2 h-fit p-2 flex self-center cursor-grab"
          >
            <HolderOutlined className="text-[2rem]  h-fit self-center" />
          </div>
          <Project
            title="Price-feed-scraper 💳"
            description="Scrapes the web for the top 10 crypto currencies and their
          relevant data."
            mobileDescription="Scrapes the web for the top 10 crypto currencies and their
          relevant data."
            gitLink="https://github.com/DylanBabcock/price-feed-scraper"
            hover={hover2}
          />
        </div>
      </Draggable>

      {/* Third project */}

      <Draggable
        handle=".handle3"
        defaultPosition={{ x: isMobile ? 10 : 100, y: 40 }}
        bounds="parent"
      >
        <div className="flex">
          <div
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
            className="handle3 h-fit p-2 flex self-center cursor-grab"
          >
            <HolderOutlined className="text-[2rem]  h-fit self-center" />
          </div>
          <Project
            title="Sim-Earth 🌎"
            description="This is a Sim-Earth inspired game I have been working on! You get to adjust Earth's parameters and see how it might evolve in different conditions. The images and descriptions of the creatures/evolutions are all created by the GPT and DALL·E API."
            mobileDescription="Sim-Earth inspired game (in development). All entities and images are generated from the GPT and DALL·E APIs."
            gitLink="https://github.com/DylanBabcock/Hackathon2021"
            hover={hover3}
          />
        </div>
      </Draggable>
    </div>
  );
}
