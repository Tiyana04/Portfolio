import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2> Contact Me </h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">

            <div className="contact-info-item">
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p> +94 78 453 5298 </p>
              </div>
            </div>

            <div className="contact-info-item">
              <FaEnvelope />
              <div>
                <h4> Email </h4>
                <p> tiyanaludowyke04@gmail.com </p>
              </div>
            </div>

            <div className="contact-info-item">
              <FaMapMarkerAlt />
              <div>
                <h4> Location </h4>
                <p> 61/3A, St. Anne's Church Road, Weligampitiya, Ja-Ela. </p>
              </div>
            </div>

            <div className="download-cv">
              <a href="/assets/Tiyana CV.pdf" download className="btn">
                Download CV
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"> Email </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject"> Subject </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message"> Message </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn"> Send Message </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;