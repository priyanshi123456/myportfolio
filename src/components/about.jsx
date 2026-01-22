import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const [active, setActive] = useState("Priyanshi");

  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  const content = {
    Priyanshi: {
      title1: "still running,",
      title2: "not hunting",
      text: "building aesthetic, fast & interactive web experiences with clean code and smooth animations.",
      img: "/imag.png",
    },
    Manav: {
      title1: "creative",
      title2: "developer",
      text: "I’m a passionate web developer who loves building interactive and visually appealing websites, I work with modern tools like HTML, CSS, JavaScript, React, GSAP and focus on clean UI & smooth animations. Currently learning more about fullstack development and real-world projects",
      img: "/manav.png",
    },
  };

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    })
      .from(imgRef.current, {
        x: isMobile ? 0 : -100,
        y: isMobile ? 40 : 0,
        opacity: 0,
        duration: 1.1,
      })
      .from(
        textRef.current,
        {
          x: isMobile ? 0 : 100,
          y: isMobile ? 30 : 0,
          opacity: 0,
          duration: 1.1,
        },
        "-=0.7"
      )
      .from(
        btnRef.current,
        {
          y: -40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      );
  }, [active]);

  return (
    <section ref={sectionRef} className="about">
      <h2 className="heading">our team</h2>
      {/* Buttons */}
      <div className="about-buttons">
        {["Priyanshi", "Manav"].map((item) => (
          <button
            key={item}
            className={`tab-btn ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="about-content">
        <div ref={imgRef} className="about-img">
          <img src={content[active].img} alt="" />
        </div>

        <div ref={textRef} className="about-text">
          <h1 className="title gradient-yellow">
            {content[active].title1}
          </h1>
          <h1 className="title gradient-white">
            {content[active].title2}
          </h1>

          <p>{content[active].text}</p>

          <button ref={btnRef} className="cv-btn">
            download cv
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
