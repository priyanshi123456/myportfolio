import React from "react";
import "remixicon/fonts/remixicon.css";
import Upper from "./components/upper";
import About from "./components/about";
import Slider from "./components/slider";
import ThreeDRotation from "./components/RotatingGallery";


function App() {
  return (
    <div>
    <Upper />
    <About />
    <Slider/>
    <ThreeDRotation/>
    </div>
  );
}

export default App;
