import React from 'react';

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SKIN WIN</h3>
          <p>Your trusted partner in advanced dermatology and aesthetic treatments.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
            <li><button onClick={() => setCurrentPage('services')}>Services</button></li>
            <li><button onClick={() => setCurrentPage('about')}>About</button></li>
            <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📍 Anupgarh, Rajasthan</p>
          <p>📞 +91 12345 67890</p>
          <p>✉️ info@skinwin.com</p>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid #555', paddingTop: '1rem', marginTop: '2rem' }}>
        <p>© 2024 Skin Win Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
