'use client';

import { allCocktails } from '../../constants';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './whyChoose.css';

const Menu = () => {
  const contentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = allCocktails.length;

  useGSAP(() => {
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });

  
    gsap.fromTo(
      '.details h2',
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.8 }
    );

    gsap.fromTo(
      '.details p',
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    );
  }, [currentIndex]);

  const goToSlide = (i) => {
    setCurrentIndex((i + total) % total);
  };

  const getItem = (offset) =>
    allCocktails[(currentIndex + offset + total) % total];

  const current = getItem(0);
  const prev = getItem(-1);
  const next = getItem(1);

  return (
    <section id="menu">
      <img src="/slider-left-leaf.png" id="m-left-leaf" alt="" />
      <img src="/slider-right-leaf.png" id="m-right-leaf" alt="" />

      {/* HEADING */}
      <h2 id="menu-heading">
        Why Choose Us
        <span >Because we combine technology, creativity & strategy</span>
      </h2>

      {/* TABS */}
      <nav className="cocktail-tabs">
        {allCocktails.map((item, index) => (
          <button
            key={item.id}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => goToSlide(index)}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* CONTENT */}
      <div className="content">
        {/* ARROWS */}
        <div className="arrows">
          <button onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prev.name}</span>
            <img src="/right-arrow.png" alt="Previous" />
          </button>

          <button onClick={() => goToSlide(currentIndex + 1)}>
            <span>{next.name}</span>
            <img src="/left-arrow.png" alt="Next" />
          </button>
        </div>

        {/* IMAGE */}
        {/* <div className="service-image">
          <img src={current.image} alt={current.name} />
        </div> */}

        {/* TEXT */}
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Our Expertise</p>
            <p id="title">{current.name}</p>
          </div>

          <div className="details">
            <h2>{current.title}</h2>
            <p>{current.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
