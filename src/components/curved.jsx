import { useState, useEffect } from "react";

const items = [
  { img: "/frontend.png" },
  { img: "/2.png" },
  { img: "/1.png" },
  { img: "/backend.png" },
  { img: "/digi.png" },
];

const CurvedSlider = () => {
  const [active, setActive] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "90vh",
        overflow: "hidden",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* BLUR BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/blury.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.05)",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
        }}
      />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 10, width: "100%" }}>
        {/* HEADING */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <h1
            style={{
              paddingTop: "20px",
              fontSize: isMobile ? "2rem" : "3.5rem",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Services
          </h1>
        </div>

        {/* SLIDER */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            height: isMobile ? "50vh" : "60vh",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1000px",
          }}
        >
          {items.map((item, i) => {
            const offset = i - active;

            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  position: "absolute",
                  width: isMobile ? "180px" : "240px",
                  height: isMobile ? "260px" : "340px",
                  cursor: "pointer",
                  transform: `
                    translateX(${offset * (isMobile ? 120 : 240)}px)
                    scale(${offset === 0 ? 1 : isMobile ? 0.9 : 0.85})
                    rotateY(${offset * (isMobile ? -12 : -25)}deg)
                  `,
                  zIndex: 20 - Math.abs(offset),
                  opacity: Math.abs(offset) > (isMobile ? 2 : 3) ? 0 : 1,
                  transition: "all 0.7s ease",
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurvedSlider;