import React, { useState } from "react";
import { Divider, Tag } from "antd";
import useIsMobile from "../context/useIsMobile";
import { useThemeContext } from "../context/ThemeContext";
import { useThemeUI } from "theme-ui";
export default function ExperienceSection() {
  const isMobile = useIsMobile();

  const { themeIndex } = useThemeContext();
  const { theme } = useThemeUI();
  const customTheme = theme.colors[themeIndex];

  const EducationCard = ({ institution, degree, dates, text, mobileText }) => {
    return (
      <div
        className="flex  max-w-[1500px] justify-between p-[1rem]  items-start mb-[1rem] rounded-[3px]"
        style={{
          width: isMobile ? "100%" : "90%",
          flexDirection: isMobile ? "column" : "row",
          backgroundColor: customTheme.background,
        }}
      >
        <div className="flex flex-col text-[1.5rem]">
          <p className="p-0 m-0 text-[1.5rem] font-normal italic">
            {institution}
          </p>
          <p className="m-0 p-0 text-[1.5rem] font-medium">
            {degree} <br />
            <Tag
              className="text-[1.1rem]"
              color={`${degree === "Intern III" ? "blue" : "green"}`}
            >
              {dates}
            </Tag>
          </p>
        </div>
        <div className="flex" style={{ maxWidth: isMobile ? "100%" : "70%" }}>
          {!isMobile && (
            <p
              className="m-0 p-0 pr-[1rem] text-[1.5rem]"
              style={{
                color: customTheme.primary,
              }}
            >
              ___________
            </p>
          )}
          <p className="p-[.25rem] text-[1.5rem] rounded-[5px] font-light">
            {isMobile ? mobileText : text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="h-fit flex flex-col items-center overflow-auto overflow-x-hidden"
      style={{
        backgroundColor: customTheme.backgroundAlt3,
        padding: isMobile ? "1rem 1rem 1rem 1rem" : "1rem 4rem 4rem 4rem",
        color: customTheme.text,
      }}
    >
      <h1
        className={`font-thin ${
          isMobile ? "text-[2.5rem]" : "text-[3.25rem]"
        } mb-4`}
      >
        Experience 💼
      </h1>

      <EducationCard
        institution="Blue Cross Blue Shield of Florida"
        degree="Intern III"
        dates="05/15/2023 - current"
        text="At Florida Blue, as part of the Advanced Technology Solutions team, I develop web prototypes that address business challenges, blending React and NextJs for front-end efficiency and UX. My role involves collaborative problem-solving across teams, leveraging Apollo GraphQL and MongoDB for data management. This dynamic environment fosters continuous learning, pushing me to explore new technologies and refine our development processes to enhance our project's scalability and maintainability."
        mobileText="At Florida Blue within the Advanced Technology Solutions team, I craft web prototypes leveraging React and NextJs, focusing on innovative solutions and aesthetic functionality. I collaborate on problem-solving and utilize Apollo GraphQL and MongoDB for data management, emphasizing scalable, maintainable projects."
      />

      <Divider
        style={{
          backgroundColor: customTheme.primary,
          marginTop: "3rem",
        }}
      />

      <h1
        className={`font-thin ${
          isMobile ? "text-[2.5rem]" : "text-[3.25rem]"
        } mb-4`}
      >
        Education 🎓
      </h1>
      <EducationCard
        institution="University of Phoenix"
        degree="B.S. Information Technology"
        dates="Complete - Nov. 2023"
        text="My IT degree encompassed a broad spectrum of topics, from coding principles and object-oriented programming to network management and cybersecurity. It provided a comprehensive foundation in information technology, equipping me with both theoretical knowledge and practical skills."
        mobileText="My IT degree encompassed a broad spectrum of topics, from coding principles and object-oriented programming to network management and cybersecurity."
      />

      <EducationCard
        institution="Woz U"
        degree=".NET BootCamp"
        dates="Complete - Jan. 2022"
        text="This was a 9 week bootcamp where we went over a wide range of technologies but with a focus on .NET development. This was great for really drilling down the concepts of OOP and getting a better understanding of the SDLC"
        mobileText="This was a 9 week bootcamp where we went over a wide range of technologies but with a focus on .NET development. This was great for really drilling down the concepts of OOP and getting a better understanding of the SDLC"
      />

      <EducationCard
        institution="St. John's River College"
        degree="A.S. Computer Programming"
        dates="Complete - May 2021"
        text="This had a mixture of general first year college classes, and some introduction technology classes. During this time I was introduced to web development, OOP in many different languages, proper research and documentation, and much more."
        mobileText="This had a mixture of general first year college classes, and some introduction technology classes. I was introduced to web development, OOP in many different languages, proper research and documentation, and much more."
      />
    </div>
  );
}
