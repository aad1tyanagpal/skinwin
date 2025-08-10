import React from 'react';

function Header({ setCurrentPage, currentPage }) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">SKIN WIN</div>
        <ul className="nav-links">
          <li>
            <button 
              className={currentPage === 'home' ? 'active' : ''}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'services' ? 'active' : ''}
              onClick={() => setCurrentPage('services')}
            >
              Services
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'about' ? 'active' : ''}
              onClick={() => setCurrentPage('about')}
            >
              About
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'contact' ? 'active' : ''}
              onClick={() => setCurrentPage('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
        <button className="btn-primary" onClick={() => setCurrentPage('contact')}>
          Book Now
        </button>
      </nav>
    </header>
  );
}

export default Header;
