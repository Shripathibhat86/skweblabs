import React from 'react';
import './Hero.css';
import heroImage from "../assets/hero_illustration_1777266451836.png"; // Make sure we copy this or generate one

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">


        <h1 className="hero-title">
          Build Your Website <br />
          <span className="text-gradient">Launch with Confidence.</span>
        </h1>

        <p className="hero-subtitle">
          We provide a one-stop solution for design, development, deployment, and SEO optimization.
          Transform your digital presence at the best price.
        </p>




      </div>

      <div className="hero-image-container">
        <div className="glow-effect"></div>
        {/* We will use a placeholder or the generated image here */}
        <img src={heroImage} alt="SK Web Labs Illustration" className="hero-image floating" id="hero-illustration" />
      </div>
    </section>
  );
};

export default Hero;
