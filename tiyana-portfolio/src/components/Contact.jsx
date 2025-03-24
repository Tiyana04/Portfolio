import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });
    
    // Prepare form data with access key
    const dataToSend = {
      ...formData,
      access_key: 'bd606a5b-26a7-4900-b004-b2a42d480c50'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Form submission successful
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Thank you for your message! I will get back to you soon.'
        });
        
        // Reset form data
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Form submission failed
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: result.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'An error occurred. Please check your connection and try again.'
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-info-item">
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p>+94 78 453 5298</p>
              </div>
            </div>

            <div className="contact-info-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>tiyanaludowyke04@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>61/3A, St. Anne's Church Road, Weligampitiya, Ja-Ela.</p>
              </div>
            </div>

            <div className="download-cv">
              <a href="/assets/Tiyana Ludowyke CV.pdf" download className="btn">
                Download CV
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              {/* Honeypot field to prevent spam */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="subject">Subject</label>
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
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn" 
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {status.success && (
                <div className="success-message">
                  {status.message}
                </div>
              )}
              
              {status.error && (
                <div className="error-message">
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;