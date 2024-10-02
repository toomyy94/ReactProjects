import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

export function CV() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, [location]);

  return (
    <div className="cv-container" id="cv">
      <h2 className="cv-title" data-aos="fade-up">
        My CV
      </h2>
      <div className="cv-content" data-aos="fade-up">
        {/* Your CV information here */}
      </div>
    </div>
  );
}
