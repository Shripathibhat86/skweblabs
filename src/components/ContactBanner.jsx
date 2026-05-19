import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <div className="contact-banner-container container">
      <div className="contact-banner glass">
        <h3 className="contact-title">Ready to launch your project?</h3>
        
        <div className="contact-methods">
          <a href="tel:+917022183067" className="contact-btn phone">
            <Phone size={20} />
            +91 7022183067
          </a>
          
          <div className="divider"></div>
          
          <a href="https://wa.me/917022183067" className="contact-btn whatsapp">
            <MessageCircle size={20} />
            +91 7022183067
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
