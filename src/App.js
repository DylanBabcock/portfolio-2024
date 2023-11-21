import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import DragSection from "./components/DragSection";
import SplashSection from "./components/SplashSection";
import Experience from "./components/Experience";
import ContactSection from "./components/ContactSection";
import ConfettiExplosion from "react-confetti-explosion";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./context/theme";
import { MyProvider } from "./context/ThemeContext";
function App() {
  const [isExploding, setIsExploding] = React.useState(false);
  const bottomElementRef = useRef(null);

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
          <DragSection />
          <Experience />
          {/* This should stay empty */}
          {isExploding && <ConfettiExplosion />}
          <div style={{ marginBottom: "100vh" }}></div>
        </ThemeUIProvider>
      </MyProvider>
    </>
  );
}

export default App;
