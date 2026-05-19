import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';
import myLogo from '../assets/my-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={myLogo} alt="SK Web Labs Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive && window.location.pathname === '/' ? 'active' : '')}>Services</NavLink></li>
        <li><NavLink to="/who-we-are" className={({ isActive }) => (isActive ? 'active' : '')}>Who We Are</NavLink></li>
        <li><NavLink to="/our-works" className={({ isActive }) => (isActive ? 'active' : '')}>Our Works</NavLink></li>
        <li><NavLink to="/support" className={({ isActive }) => (isActive ? 'active' : '')}>Support</NavLink></li>
      </ul>

      <div className="navbar-actions">
        <a href="https://wa.me/917022183067" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          Let's Start
          <ArrowUpRight size={18} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
