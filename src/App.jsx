import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Upper from "./components/upper";
import About from "./components/about";
import Team from "./components/team";
import Menu from "./components/whyChoose";
import Slider from "./components/slider";
import CurvedSlider from "./components/curved";
import Contact3 from "./components/Contact";
import Testimonials from "./components/testimonial";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  /* 🔥 Smooth Scroll Function */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false); // close menu on click (mobile)
    }
  };

  return (
    <div>

      {/* 🔥 Sticky Glass Navbar */}
      <nav className="navbar">
        <div className="logo">PORTFOLIO</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("services")}>why to choose us</li>
          <li onClick={() => scrollToSection("gallery")}>Services   </li>
           <li onClick={() => scrollToSection("team")}>Team   </li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        {/* Mobile Menu Button ONLY */}
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </nav>

      {/* Sections with IDs */}
      <section id="home">
        <Upper />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Slider />
      </section>

      <section id="services">
        <Menu />
      </section>

      <section id="gallery">
        <CurvedSlider />
      </section>

      <section>
        <Testimonials />
      </section>

      <section  id="team">
        <Team />
      </section>

      <section id="contact">
        <Contact3 />
      </section>

      {/* CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          font-family: 'Poppins', sans-serif;

          width: 95%;
          margin-top: 15px;

          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 50px;

          background: rgba(255, 253, 253, 0.3);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);

          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .logo {
          font-size: 22px;
          font-weight: 600;
          color: white;
          letter-spacing: 1px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
        }

        .nav-links li {
          cursor: pointer;
          font-size: 16px;
          color: white;
          font-weight: 500;
          transition: 0.3s ease;
        }

        .nav-links li:hover {
          color: orange;
        }

        /* Mobile Menu Button */
        .menu-btn {
          display: none;
          font-size: 26px;
          color: white;
          cursor: pointer;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .navbar {
            padding: 12px 20px;
          }

          .menu-btn {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 75px;
            left: 0;
            width: 100%;
            flex-direction: column;
            gap: 20px;
            padding: 20px 0;
            border-radius: 20px;

            background: rgba(255, 253, 253, 0.3);
            backdrop-filter: blur(15px);

            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition: all 0.3s ease;
          }

          .nav-links.open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .nav-links li {
            font-size: 18px;
          }
        }
      `}</style>

    </div>
  );
}

export default App;