import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Upper() {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);

  /* ================= INTRO SVG ================= */
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 1.8,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 12,
      opacity: 0,
      duration: 1.8,
      delay: -1.5,
      ease: "expo.inOut",
      onComplete: () => {
        document.querySelector(".svg")?.remove();
        setShowContent(true);
      },
    });
  }, []);

  /* ================= GYRO PERMISSION (iOS) ================= */
  const requestGyroPermission = () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission().catch(() => {});
    }
  };

  /* ================= MAIN ANIMATION + PARALLAX ================= */
  useGSAP(
    () => {
      if (!showContent) return;

      gsap.to(".main", {
        scale: 1,
        rotate: 0,
        duration: 1.6,
        ease: "expo.inOut",
      });

      gsap.to(".sky, .bg", {
        scale: 1.05,
        duration: 1.6,
        delay: 0.1,
        ease: "expo.inOut",
      });

      gsap.to(".character", {
        scale: 1.25,
        bottom: "-20%",
        duration: 1.6,
        delay: 0.2,
        ease: "expo.inOut",
      });

      gsap.to(".hero-text", {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".bottom-shadow",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, delay: 0.6 },
      );

      const isMobile = window.innerWidth <= 768;

      /* ===== DESKTOP MOUSE PARALLAX ===== */
      if (!isMobile) {
        const move = (e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 40;

          gsap.to(".sky", { x: x * 0.6, duration: 0.4 });
          gsap.to(".bg", { x: x, duration: 0.4 });
          gsap.to(".hero-text", { x: x * 0.3, duration: 0.4 });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
      }

      /* ===== MOBILE GYROSCOPE PARALLAX ===== */
      if (isMobile && window.DeviceOrientationEvent) {
        const handleOrientation = (e) => {
        
          const x = gsap.utils.clamp(-45, 45, e.gamma || 0);
          const y = gsap.utils.clamp(-45, 45, e.beta || 0);

          gsap.to(".sky", {
            x: x * 0.6, 
            y: y * 0.5, 
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(".bg", {
            x: x * 1.2, 
            y: y * 0.9, 
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(".hero-text", {
            x: x * 0.5, 
            duration: 0.5,
            ease: "power2.out",
          });
        };

        window.addEventListener("deviceorientation", handleOrientation);

        return () =>
          window.removeEventListener("deviceorientation", handleOrientation);
      }
    },
    { dependencies: [showContent], scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      onClick={requestGyroPermission}
      className="min-h-[1vh] w-full overflow-x-hidden bg-black"
    >
      {/* ================= SVG INTRO ================= */}
      <div className="svg fixed inset-0 z-[100] flex items-center justify-center bg-black">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="72"
                  fill="white"
                  fontFamily="Arial Black"
                >
                  PORTFOLIO
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* ================= MAIN ================= */}
      {showContent && (
        <div className="main scale-[1.2] rotate-[-6deg] origin-center">
          <section className="relative w-full h-screen overflow-hidden">
            {/* NAV */}
            <nav className="absolute top-3 left-0 w-full z-10 px-6 sm:px-12 py-6 flex items-center gap-4">
              <div className="space-y-1">
                <span className="block w-10 h-[3px] bg-white"></span>
                <span className="block w-7 h-[3px] bg-white"></span>
                <span className="block w-5 h-[3px] bg-white"></span>
              </div>
              <h3 className="text-white text-xl sm:text-3xl font-semibold">
                portfolio
              </h3>
            </nav>

            {/* BACKGROUNDS */}
            <img
              src="/sky.png"
              className="sky absolute inset-0 w-full h-full object-cover scale-[1.3]"
              alt=""
            />
            <img
              src="/bg.png"
              className="bg absolute inset-0 w-full h-full object-cover scale-[1.4]"
              alt=""
            />

            {/* TEXT */}
            <div className="hero-text absolute top-[10%] left-1/2 -translate-x-1/2 text-center text-white opacity-0 translate-y-10">
              <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] leading-none">
                my
              </h1>
              <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] leading-none">
                self
              </h1>
              <h1 className="text-[3.5rem] sm:text-[6rem] md:text-[8rem] leading-none">
                priyanshi
              </h1>
            </div>

            {/* CHARACTER */}
            <img
              src="/girlbg.png"
              className="character absolute left-1/6 -translate-x-1/2 -bottom-[60%] sm:-bottom-[35%] scale-[1.8] sm:scale-[2.4]"
              alt=""
            />

            {/* BOTTOM SHADOW */}
            <div className="bottom-shadow pointer-events-none absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black via-black/70 to-transparent opacity-0"></div>

            {/* SCROLL */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white flex items-center gap-2 opacity-80">
              <i className="ri-arrow-down-line text-2xl"></i>
              <span>Scroll Down</span>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Upper;
