"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "services",
  "portfolio",
  "process",
  "testimonials",
  "contact",
];

export function useScroll() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { activeSection };
}