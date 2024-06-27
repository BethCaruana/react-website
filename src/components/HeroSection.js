import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>Adventure Awaits</h1>
      <p> What are you waiting for?</p>
      <div className="hero-btns">
        <Button
         className='btns'
         buttonStyle='btn--outline'
         buttonSize='btn--large'>
        Get Started
        </Button>
        <Button
         className='btns'
         buttonStyle='btn--primary'
         buttonSize='btn--large'>
        Watch Trailer <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
