import React from 'react';

function Services() {
  const services = [
    {
      title: "Laser Rejuvenation",
      description: "Advanced laser treatments for skin rejuvenation, pigmentation removal, and hair reduction using FDA-approved technology.",
      image: "/images/laser-treatment.jpg"
    },
    {
      title: "Advanced Skin Care",
      description: "Medical-grade facials, chemical peels, and PRP treatments to restore your skin's natural glow.",
      image: "/images/skin-care.jpg"
    },
    {
      title: "Hair Restoration",
      description: "Comprehensive hair restoration solutions including PRP therapy and hair transplant procedures.",
      image: "/images/hair-restoration.jpg"
    }
  ];

  return (
    <section className="section" style={{ paddingTop: '6rem' }}>
      <h1 className="section-title">Our Services</h1>
      <p className="section-subtitle">
        Discover our range of advanced treatments designed to address your unique skin and hair concerns.
      </p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
