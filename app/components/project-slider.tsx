"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectSliderProps = {
  images: string[];
  title: string;
  appType: "web" | "mobile";
};

export function ProjectSlider({ images, title, appType }: ProjectSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = images.length ? images : ["/hero-reference.jpg"];

  const goTo = (index: number) => {
    const total = slides.length;
    setActiveIndex((index + total) % total);
  };

  return (
    <div className="project-slider">
      <div className={`project-slider-frame ${appType === "mobile" ? "is-mobile" : "is-web"}`}>
        <Image
          key={slides[activeIndex]}
          src={slides[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          width={1200}
          height={appType === "mobile" ? 2200 : 760}
          className="project-slider-image"
          priority
        />

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              className="project-slider-arrow left"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous screenshot"
            >
              {"<"}
            </button>
            <button
              type="button"
              className="project-slider-arrow right"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next screenshot"
            >
              {">"}
            </button>
          </>
        ) : null}
      </div>

      <div className="project-slider-dots" role="tablist" aria-label="Screenshot navigation">
        {slides.map((slide, index) => (
          <button
            key={`${slide}-${index}`}
            type="button"
            onClick={() => goTo(index)}
            className={`project-slider-dot ${activeIndex === index ? "active" : ""}`}
            aria-label={`Open screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

