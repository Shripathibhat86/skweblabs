import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <div className="who-we-are-page container">
      <div className="who-we-are-header">
        <h1 className="who-we-are-title">Who <span className="text-gradient">We Are</span></h1>
        <p className="who-we-are-subtitle">
          We are a passionate team of digital creators dedicated to transforming ideas into reality. 
          We specialize in designing and developing stunning, high-performance websites tailored to your unique business needs.
        </p>
      </div>

      <div className="who-we-are-content">
        <div className="content-block">
          <h2>Our Mission</h2>
          <p>
            At SK Web Labs, we believe that every business deserves a powerful online presence. 
            From seamless e-commerce platforms to dynamic web applications, we develop websites that not only look incredible but also drive real results. 
            We handle everything from initial design and development to full deployment and SEO optimization.
          </p>
        </div>

        <div className="content-block">
          <h2>Why Choose Us?</h2>
          <p>
            We don't just build websites; we craft digital experiences. Our approach is collaborative, 
            transparent, and focused entirely on helping your brand succeed in a competitive digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
