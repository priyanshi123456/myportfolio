import React from "react";
import "./RotatingGallery.css";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
];

const depth = window.innerWidth < 768 ? 180 : 320;




const ThreeDRotation = () => {
  return (
    <div className="maino">
      
      <h2> our services
        <div className="topdw"></div>
      </h2>
    <div className="scene">

      <div className="carousel">
        {images.map((img, i) => (
          <div
            className="card"
            key={i}
            style={{
              transform: `
                rotateY(${i * (360 / images.length)}deg)
                translateZ(360px)
              `,
            }}
          >
            <img src={img} alt="art" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ThreeDRotation;
