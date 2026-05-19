import React from 'react';
import { Globe, Rocket, LineChart } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Globe size={32} className="text-blue" />,
      title: "Website Development",
      description: "Custom, responsive websites built with modern frameworks to ensure optimal performance and user experience."
    },
    {
      id: 2,
      icon: <Rocket size={32} className="text-pink" />,
      title: "Deployment & Hosting",
      description: "Secure, reliable deployment solutions ensuring your application is always online and scalable."
    },
    {
      id: 3,
      icon: <LineChart size={32} className="text-purple" />,
      title: "SEO Optimization",
      description: "Data-driven strategies to improve your search visibility and bring organic traffic to your business."
    }
  ];

  return (
    <section id="services" className="services container">
      <div className="section-header text-center">
        <span className="badge">One-Stop Solution</span>
        <h2 className="section-title">Comprehensive <span className="text-gradient">Services</span></h2>
        <p className="section-subtitle">Everything you need to launch and grow your digital presence, all in one place at the best price.</p>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card glass">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
