import React from 'react';
import { MessageCircle, Headphones, Mail } from 'lucide-react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-page container">
      <div className="support-header">
        <h1 className="support-title">How can we <span className="text-gradient">help you?</span></h1>
        <p className="support-subtitle">
          Whether you have a question about our services, need technical assistance, or want to discuss a new project, our team is here for you.
        </p>
      </div>

      <div className="support-content">
        <div className="support-card whatsapp-card">
          <div className="support-icon-wrapper">
            <MessageCircle size={32} />
          </div>
          <h2>WhatsApp Support</h2>
          <p>Get instant assistance from our support team via WhatsApp.</p>
          <a href="https://wa.me/917022183067" target="_blank" rel="noopener noreferrer" className="support-btn whatsapp-btn">
            Chat on WhatsApp
          </a>
          <p className="support-detail">+91 7022183067</p>
        </div>

        <div className="support-card">
          <div className="support-icon-wrapper">
            <Headphones size={32} />
          </div>
          <h2>Call Us</h2>
          <p>Prefer to talk? Give us a call directly during our business hours.</p>
          <a href="tel:+917022183067" className="support-btn outline-btn">
            +91 7022183067
          </a>
          <p className="support-detail">Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
