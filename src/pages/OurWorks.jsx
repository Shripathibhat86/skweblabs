import React from 'react';
import { ExternalLink } from 'lucide-react';
import './OurWorks.css';

import cateringImage from '../assets/vinayaka_caterings.png'; // Replace this file with your actual screenshot later
import secondImage from '../assets/schedule-it.png';
import portfolioImage from '../assets/shripathi-bhat.png';

const worksData = [
  {
    id: 1,
    name: 'Shri Vinayaka Caterings',
    link: 'https://shrivinayakacaterings.in/',
    image: cateringImage,
  },
  {
    id: 2,
    name: 'Schedule IT',
    link: 'https://www.schedule-it.in/',
    image: secondImage, // Change 'null' to another imported image when you have one
  },
  {
    id: 3,
    name: 'Shripathi Bhat',
    link: 'https://shripathibhat.in/',
    image: portfolioImage,
  }
];

const OurWorks = () => {
  return (
    <div className="our-works-page container">
      <div className="works-header">
        <h1 className="works-title">Our <span className="text-gradient">Works</span></h1>
        <p className="works-subtitle">
          Explore our portfolio of recent projects and see how we've helped businesses transform their digital presence.
        </p>
      </div>

      <div className="works-grid">
        {worksData.map((work) => (
          <div key={work.id} className="work-card">
            <div className="work-image-container">
              {work.image ? (
                <img src={work.image} alt={`${work.name} preview`} />
              ) : (
                <div className="placeholder-image">
                  [Placeholder Image: 600x400]<br />
                  Replace with actual screenshot
                </div>
              )}
            </div>
            <div className="work-content">
              <h3 className="work-name">{work.name}</h3>
              <div className="work-link-container">
                <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-link">
                  Visit Website <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
