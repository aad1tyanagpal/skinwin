import React from 'react';

function About() {
  return (
    <section className="section" style={{ paddingTop: '6rem' }}>
      <h1 className="section-title">About Skin Win</h1>
      <p className="section-subtitle">
        Your trusted partner in advanced dermatology and aesthetic treatments.
      </p>
      
      <div className="about-content">
        <div className="about-text">
          <h2>Excellence in Dermatological Care</h2>
          <p>
            Founded with a vision to make advanced dermatological care accessible to everyone, 
            Skin Win combines cutting-edge technology with compassionate care.
          </p>
          <p>
            Our clinic represents the perfect blend of medical expertise and aesthetic artistry. 
            We believe that beautiful skin is not just about appearance – it's about confidence, 
            health, and feeling your absolute best.
          </p>
          <p>
            With state-of-the-art equipment and experienced dermatologists, we provide 
            personalized treatment plans tailored to your unique needs.
          </p>
        </div>
        <div>
          <img src="/images/clinic-interior.jpg" alt="Skin Win Clinic Interior" />
        </div>
      </div>
      
      <div className="stats">
        <div className="stat">
          <div className="stat-number">500+</div>
          <div className="stat-label">Successful Treatments</div>
        </div>
        <div className="stat">
          <div className="stat-number">5+</div>
          <div className="stat-label">Years of Excellence</div>
        </div>
        <div className="stat">
          <div className="stat-number">98%</div>
          <div className="stat-label">Patient Satisfaction</div>
        </div>
      </div>
    </section>
  );
}

export default About;
