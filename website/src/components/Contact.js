import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="section" style={{ paddingTop: '6rem' }}>
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle">
        Ready to begin your journey to beautiful skin? Get in touch with us today.
      </p>
      
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
        
        <div className="contact-info">
          <h2>Get in Touch</h2>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Visit Us</h3>
              <p>123 Medical Plaza<br />Anupgarh, Rajasthan 335701</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+91 12345 67890<br />Available 9:00 AM - 7:00 PM</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>info@skinwin.com<br />appointments@skinwin.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
