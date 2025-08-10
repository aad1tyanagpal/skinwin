import React from 'react';

function Hero() {
  return (
    <section className="section-hero">
      <div className="section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Rediscover Your <span className="highlight">Natural Beauty</span>
            </h1>
            <p>
              Advanced dermatology treatments designed to restore your confidence 
              and reveal your most radiant self. Experience the difference at Skin Win Clinic.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Book Free Consultation</button>
              <button className="btn-secondary">View Services</button>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Patients</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Treatments</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero-main.jpg" alt="Skin Win Clinic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
