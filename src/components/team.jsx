import React from "react";

export default function Team() {
  const teamData = [
    {
      name: "Amar kumar",
      role: "Frontend Developer",
      image: "/amarphoto.png",
    },
    {
      name: "Rahul Sharma",
      role: "Backend Developer",
      image: "/kirti.png",
    },
    {
      name: "Manav sharma",
      role: "Script writer",
      image: "2.2.png",
    },
     {
      name: "Harshita yadav",
      role: "UI/UX Designer",
      image: "4.png",
    },
   
  ];

  return (
    <section className="team-kinetic">
      <div className="moving-bg"></div>

     <h2
  style={{
    textAlign: "center",
    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
    marginBottom: "3rem",
    color: "#ffffff",
    fontFamily: "pricedown, sans-serif",
    letterSpacing: "0.08em",
    position: "relative",
    zIndex: 2,
  }}
>
  THE TEAM
</h2>


      <div className="team-line">
        {teamData.map((m, i) => (
          <div className="kinetic-card" style={{ animationDelay: `${i * 0.3}s` }} key={i}>
            <div className="scan"></div>
          <img
  src={m.image}
  alt={m.name}
  style={{
    width: "100%",
    height: "200px",   // 👈 decrease size here
    objectFit: "contain"
  }}
/>

            <h3>{m.name}</h3>
            <span>{m.role}</span>
          </div>
        ))}
      </div>

      <style>{`
        /* ===== SECTION ===== */

        .team-kinetic {
          position: relative;
          min-height: 100vh;
          background: #000;
          color: #fff;
          overflow: hidden;
          padding: 100px 20px;
          text-align: center;
        }

        /* ===== MOVING BACKGROUND ===== */
        .moving-bg {
          position: absolute;
          inset: -200%;
          background: repeating-linear-gradient(
            45deg,
            #111 0px,
            #111 10px,
            #000 10px,
            #000 20px
          );
          animation: bgMove 20s linear infinite;
          opacity: 0.25;
        }

        @keyframes bgMove {
          to { transform: translate(50%, 50%); }
        }

        /* ===== TITLE ===== */
        .title {
          font-size: 64px;
          letter-spacing: 6px;
          margin-bottom: 80px;
          animation: glitch 2s infinite;
        }

        @keyframes glitch {
          0%, 100% { text-shadow: 0 0 0 #fff; }
          50% { text-shadow: -3px 0 red, 3px 0 cyan; }
        }

        /* ===== TEAM LINE ===== */
        .team-line {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
       font-family: Arial, Helvetica, sans-serif;
        }

        /* ===== CARD ===== */
        .kinetic-card {
          position: relative;
          width: 240px;
          height: 360px;
          background: #050505;
          border: 2px solid #222;
          animation:
            enter 0.8s ease forwards,
            idleShake 2.5s infinite;
          opacity: 0;
          overflow: hidden;
        }

        @keyframes enter {
          from { transform: translateY(80px) scale(0.8); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes idleShake {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        /* ===== SCAN LINE ===== */
        .scan {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(233, 105, 74, 0.25),
            transparent
          );
          animation: scan 2s linear infinite;
          pointer-events: none;
        }

        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }

        /* ===== IMAGE ===== */
        .kinetic-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          filter: contrast(1.2) saturate(1.2);
        }

        /* ===== TEXT ===== */
        .kinetic-card h3 {
          margin-top: 12px;
          font-size: 18px;
          letter-spacing: 1px;
        }

        .kinetic-card span {
          font-size: 13px;
          color: #f97316;
        }

        /* ===== HOVER ===== */
        .kinetic-card:hover {
          transform: scale(1.08) rotate(-2deg);
          box-shadow: 0 0 40px #f97316;
        }

        /* ===== MOBILE ===== */
        @media (max-width: 600px) {
          .title { font-size: 40px; }
          .kinetic-card { width: 200px; height: 320px; }
        }
      `}</style>
    </section>
  );
}
