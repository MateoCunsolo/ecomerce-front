import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            CILSA SHOP is your one-stop destination for the best products at affordable prices. 
            Quality and customer satisfaction are our priorities.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#a" aria-label="Facebook" className="social-icon">🔵</a>
            <a href="#b" aria-label="Twitter" className="social-icon">🐦</a>
            <a href="#c" aria-label="Instagram" className="social-icon">📸</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 CILSA SHOP | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
