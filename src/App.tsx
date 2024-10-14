import "./App.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { NavigationBar } from "./components/NavigationBar";
import { Projects } from "./components/Projects";
import React, { createContext, useEffect, useRef } from "react";

export const ScrollContext = createContext<{
  scrollTo: (selector: string) => void;
}>({
  scrollTo: () => {},
});

export const ScrollProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const scrollTo = (selector: string) => {
    document
      .querySelector(selector)
      ?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

function App() {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMotionListener = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (pointerRef.current) {
        const { offsetHeight, offsetWidth } = pointerRef.current;
        const minimum = Math.min(offsetHeight, offsetWidth);
        pointerRef.current.style.setProperty("width", `${minimum}px`);
        pointerRef.current.style.setProperty("height", `${minimum}px`);
        pointerRef.current.style.setProperty(
          "left",
          `${clientX - minimum / 2}px`
        );
        pointerRef.current.style.setProperty(
          "top",
          `${clientY - minimum / 2}px`
        );
      }
    };

    window.addEventListener("mousemove", mouseMotionListener);

    return () => {
      window.removeEventListener("mousemove", mouseMotionListener);
    };
  }, []);

  return (
    <ScrollProvider>
      <div className="overflow-hidden fixed inset-0">
        <div
          ref={pointerRef}
          className="radial-grad z-10 min-h-screen w-full absolute top-0"
        ></div>
        <div className="absolute inset-0 z-20 vertical-scrollbar">
          <NavigationBar />
          <HeroSection />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </ScrollProvider>
  );
}

export default App;
