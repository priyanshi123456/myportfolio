import React from "react";
import "./Slider.css";

const row1Images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
];

const row2Images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
];

const row3Images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
];

/* 🔹 Reusable Row Component */
function SliderRow({ images, reverse = false, speed = 25 }) {
  return (
    <div className="slider-row">
      <div
        className={`slider-track ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...images, ...images].map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt="project" />
          </div>
        ))}
      </div>
    </div>
  );
}

const Slider = () => {
  return (
    <section className="projects-slider">
      <div className="topsdw"></div>
      <h2>our projects</h2>

      {/* 3 Different Rows */}
      <SliderRow images={row1Images} speed={25} />
      <SliderRow images={row2Images} reverse speed={30} />
      <SliderRow images={row3Images} speed={35} />
    </section>
  );
};

export default Slider;
