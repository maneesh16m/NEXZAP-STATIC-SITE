import React, { useEffect, useRef } from "react";
import './hero.css';

const HeroSection = () => {
  const flowerRef = useRef(null);
  const rotationRef = useRef(0);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (flowerRef.current) {
      const scrollDirection = scrollY - lastScrollY.current;
      rotationRef.current += scrollDirection * 0.1;
      flowerRef.current.style.transform = `rotate(${rotationRef.current}deg) translateY(${scrollY * 0.05}px) scale(1)`;
      
      flowerRef.current.style.animation = 'none';
      
      const maxScroll = 600;
      const opacity = Math.max(0, 1 - scrollY / maxScroll);
      flowerRef.current.style.opacity = opacity;

      if (scrollY > 0) {
        flowerRef.current.classList.add('scrolling');
      } else {
        flowerRef.current.classList.remove('scrolling');
      }

      lastScrollY.current = scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Delay the spin animation on load
    const timer = setTimeout(() => {
      if (flowerRef.current) {
        flowerRef.current.style.opacity = 1; // Make it visible
        flowerRef.current.style.transform = `rotate(${rotationRef.current}deg)`; // Keep the current rotation without scaling
        flowerRef.current.style.animation = 'spinAndZoom 3s ease-out forwards'; // Start the spin animation
        rotationRef.current = 15; // Set the rotation to the final state of the initial animation
      }
    }, 300); // Adjust the delay as needed

    return () => {
      clearTimeout(timer); // Cleanup the timer
    };
  }, []);

  const handleButtonClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add a silver gradient style
  const silverGradient = {
    background: 'linear-gradient(90deg, #e0e0e0 0%, #b0b0b0 50%, #f8f8f8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 700,
  };

  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="animate-slide title" style={{ wordSpacing: '10px', ...silverGradient }}>
              Innovative Software Solutions
            </h1>
            <p className="btn-shine animate-slide description" style={{ wordSpacing: '8px', ...silverGradient }}>
              Building the future of technology
            </p>
          </div>
          <button 
            className="homepagebtn animate-slide" 
            onClick={handleButtonClick}
            style={{ userSelect: 'none' }}
          >
            Explore Our Products
          </button>
          <img className="hero-image" ref={flowerRef} src={`${process.env.PUBLIC_URL}/images/flower.png`} alt="Flower" style={{ width: '450px', display: 'block', transition: 'transform 0.2s ease, opacity 0.5s ease' }} />
          <div className="fade-effect" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;