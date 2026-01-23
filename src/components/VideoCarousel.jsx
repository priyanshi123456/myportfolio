import React, { useState, useEffect, useRef } from "react"
import "./VideoCarousel.css"



export default function VideoCarousel({ reviews }) {

  const [current, setCurrent] = useState(0)
  const videoRefs = useRef([])

  // ❗ safety check
  if (!reviews || reviews.length === 0) return null

  

  const prev = () => {
    setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1))
  }

  const next = () => {
    setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1))
  }
  

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === current) {
        video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [current])

  return (
    <div className="carousel-wrapper">
       <div className="topsdw"></div>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {reviews.map((item, i) => (
          <div className="carousel-slide" key={i}>
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={item.video}
              muted
              playsInline
              loop
              className="review-video"
            />

            <div className="reviewer-name">{item.name}</div>
            <div className="review-rating">
              {"⭐".repeat(item.rating)}
            </div>
          </div>
        ))}
      </div>

      <button className="nav left" onClick={prev}>‹</button>
      <button className="nav right" onClick={next}>›</button>
    </div>
  )
}
