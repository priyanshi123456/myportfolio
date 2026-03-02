import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })
      .from(imgRef.current, {
        x: isMobile ? 0 : -120,
        opacity: 0,
        duration: 1.1,
      })
      .from(
        textRef.current,
        {
          x: isMobile ? 0 : 120,
          opacity: 0,
          duration: 1.1,
        },
        "-=0.7"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "clamp(40px, 8vw, 80px)",
        background: "#000",
        color: "#fff",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          marginBottom: "50px",
        }}
      >
        About Me
      </h2>

      {/* Content Wrapper */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* Video */}
        <div
          ref={imgRef}
          style={{
            flex: "1 1 300px",
            textAlign: "center",
          }}
        >
          <video
            src="/about.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              maxWidth: "420px",
              borderRadius: "18px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          />
        </div>

        {/* Text Section */}
        <div
          ref={textRef}
          style={{
            flex: "1 1 380px",
            maxWidth: "650px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Turning Ideas Into
            <span style={{ color: "orange" }}> Digital Reality</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
              lineHeight: "1.8",
              opacity: 0.9,
            }}
          >
            I started my coding journey in Pune and worked as a Senior Full Stack
            Developer at Calibre Tech, Navi Mumbai. Today, I lead{" "}
            <strong>Digital with Priyanshi Institute</strong>, where I teach,
            mentor, and deliver freelance projects with modern, scalable
            solutions.
          </p>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "16px",
              margin: "35px 0",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                padding: "20px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "6px" }}>
                1+ Year
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Industry Experience
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                padding: "20px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "6px" }}>
                Full Stack
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Modern Web Expert
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                padding: "20px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "6px" }}>
                Founder
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Digital with Priyanshi
              </p>
            </div>
          </div>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/digitalwithpriyanshi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
              color: "#fff",
              background: "linear-gradient(135deg, #ff8c00, #ff5e00)",
              boxShadow: "0 6px 18px rgba(255,94,0,0.4)",
              transition: "all 0.3s ease",
              marginTop: "10px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 10px 22px rgba(255,94,0,0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(255,94,0,0.4)";
            }}
          >
            <i className="fa-brands fa-instagram" style={{ fontSize: "18px" }} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;