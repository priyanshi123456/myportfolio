import React from "react";
import "remixicon/fonts/remixicon.css";
import Upper from "./components/upper";
import About from "./components/about";
import Slider from "./components/slider";
import ThreeDRotation from "./components/RotatingGallery";
import VideoCarousel from "./components/VideoCarousel";
import Contact from "./components/Contact";

const reviews = [
  {
    video: "/review1.mp4",
    name: "rohit sharma",
    rating: 5,
  },
  {
    video: "/review2.mp4",
    name: "anjali verma",
    rating: 4,
  },
  {
    video: "/review3.mp4",
    name: "aman gupta",
    rating: 5,
  },
];

function App() {
  return (
    <div>
      <Upper />
      <About />
      <Slider />
      <ThreeDRotation />
      <VideoCarousel reviews={reviews} />
      <Contact />
    </div>
  );
}

export default App;
