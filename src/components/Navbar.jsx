import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';
import myLogo from '../assets/my-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={myLogo} alt="SK Web Labs Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </Link>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => (isActive && window.location.pathname === '/' ? 'active' : '')}>Services</NavLink></li>
        <li><NavLink to="/who-we-are" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Who We Are</NavLink></li>
        <li><NavLink to="/our-works" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Our Works</NavLink></li>
        <li><NavLink to="/support" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Support</NavLink></li>
        <li className="mobile-only-action">
          <a href="https://wa.me/917022183067" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }} onClick={() => setIsMobileMenuOpen(false)}>
            Let's Start
            <ArrowUpRight size={18} />
          </a>
        </li>
      </ul>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="navbar-actions">
          <a href="https://wa.me/917022183067" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Let's Start
            <ArrowUpRight size={18} />
          </a>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
