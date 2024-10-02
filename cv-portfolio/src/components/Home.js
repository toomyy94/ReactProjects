import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css';
import '../App.css';

export function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to My Website</h1>
        <p className="home-subtitle">I am John Doe, a Web Developer</p>
        <Link to="cv" smooth duration={500} className="home-scroll-link">
          <FontAwesomeIcon icon={faChevronDown} className="home-scroll-icon" />
        </Link>
      </div>
    </div>
  );
}
