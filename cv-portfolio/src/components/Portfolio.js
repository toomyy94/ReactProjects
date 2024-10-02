import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

export function Portfolio() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, [location]);

  return (
    <div className="portfolio-container" id="portfolio">
      <h2 className="portfolio-title" data-aos="fade-up">
        My Portfolio
      </h2>
      <div className="portfolio-content" data-aos="fade-up">
        {/* Your portfolio information here */}
      </div>
    </div>
  );
}
