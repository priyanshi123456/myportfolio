import React from "react";
import "./Slider.css";

/* 🔹 First Row Images (No Links) */
const row1Images = [
  "perfume.png",
  "shampoo.png",
  "watch.png",
  "menu.png",
  "3.jpg",
  "4.jpg",
];

/* 🔹 Second Row Images (With Links) */
const row2Images = [
  { img: "vatika.png", link: "https://finalpremvatika.netlify.app/" },
  { img: "pecto.png", link: "https://www.petco.com/shop/en/petcostore?srsltid=AfmBOoqa5UoabvcPkXcUB0phjOlmdLq_tBUx3BOzdKowTiXYsYExSYGJ" },
  { img: "backery.png", link: "https://ashirwadcuisine.netlify.app/" },
  { img: "walbii.png", link: "https://www.walbi.com/" },
  { img: "sisticcc.png", link: "https://www.sistic.com.sg/events/mansions0326?utm_source=meta&utm_medium=paid&gad_source=1&gad_campaignid=23279820845&gclid=Cj0KCQiAm9fLBhCQARIsAJoNOctFGo2q_1PlEiK3HocVjZjzCVQpszSufVNQooRooi-z4YHHE-W5G0MaAtaZEALw_wcB" },
];

/* 🔹 Reusable Row Component */
function SliderRow({ images, reverse = false, speed = 25 }) {
  return (
    <div className="slider-row">
      <div
        className={`slider-track ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...images, ...images].map((item, index) => (
          <div className="slide" key={index}>
            {/* If image is string (Row1) */}
            {typeof item === "string" ? (
              <img src={item} alt="project" />
            ) : (
              /* If image has link (Row2) */
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.img} alt="project" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🔹 Main Slider Component */
const Slider = () => {
  return (
    <section className="projects-slider">
      <div className="topsdw"></div>
      <h2 className="heading">our projects</h2>

      {/* Row 1 */}
      <SliderRow images={row1Images} speed={25} />

      {/* Row 2 (Clickable) */}
      <SliderRow images={row2Images} reverse speed={30} />
    </section>
  );
};

export default Slider;
