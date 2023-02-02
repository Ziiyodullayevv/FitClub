import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="jpg" />
                <img src={Instagram} alt="jpg" />
                <img src={LinkedIn} alt="jpg" />
            </div>
            <div className="logo-footer">
                <img src={Logo} alt="jpg" />
            </div>
        </div>
        {/* blur effects */}
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default Footer