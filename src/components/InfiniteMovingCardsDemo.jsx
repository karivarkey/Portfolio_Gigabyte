"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      } else if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "180s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "150s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 pb-0",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className={cn(
              "grid-default-color relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-[#0c0c1b] px-8 py-6 md:w-[450px]",
            )}
            key={item.name + item.title}>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <span className="relative z-20 text-base leading-[1.6] font-normal text-white">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center pb-0 mb-0">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-semibold text-[#649ea3]">
                    {item.name}
                  </span>
                  <span className="text-xs leading-[1.6] font-normal text-[#858989]">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ADD THIS DEMO COMPONENT:
const experiences = [
  {
    quote: "Graphic Designer - Created visual assets for 20+ projects, enhancing user engagement using Photoshop and Ibis PaintX. Built a strong foundation in color theory, typography, and layout design.",
    name: "GigaByte",
    title: "2019-Present",
  },
  {
    quote: "Figma Designer - Designed a few static websites and mobile apps, focusing on user experience and interface design, then shifting focus onto responsive web design.",
    name: "GigaByte",
    title: "2023",
  },
  {
    quote: "UI/UX Designer and Front-End Developer - Developed user interfaces for web-based projects on Hackathons and Academic Projects, focusing on HTML/CSS.",
    name: "GigaByte",
    title: "2024",
  },
  {
    quote: "Front-End Developer - Developed responsive web applications using React and Tailwind CSS or CSS. Focused on building reusable components with flawless documentation.",
    name: "GigaByte",
    title: "2025",
  },
];

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="w-full py-16 bg-transparent flex items-center justify-center">
      <InfiniteMovingCards
        items={experiences}
        direction="left"
        speed="slow" 
      />
    </div>
  );
}
