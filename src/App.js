import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import ProjectSection from "./sections/ProjectSection";
import SplashSection from "./sections/SplashSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import ConfettiExplosion from "react-confetti-explosion";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./context/theme";
import { MyProvider } from "./context/ThemeContext";
function App() {
  const [isExploding, setIsExploding] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 3.8; // 380vh
      const scrolledHeight = window.scrollY + window.innerHeight;

      if (scrolledHeight >= triggerHeight) {
        setIsExploding(true);
      } else {
        setIsExploding(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <MyProvider>
        <ThemeUIProvider theme={theme}>
          <ContactSection />
          <Header />
          <SplashSection />
          <ProjectSection />
          <ExperienceSection />
          {isExploding && <ConfettiExplosion />}
          {/* This should stay empty with a marginBottom */}
          <div className="mb-[100vh]"></div>
        </ThemeUIProvider>
      </MyProvider>
    </>
  );
}

export default App;
