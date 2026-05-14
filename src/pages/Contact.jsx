import { useState } from 'react';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Unable to submit the form.');
      }

      setStatus({ loading: false, success: 'Your message has been submitted successfully.', error: null });
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ loading: false, success: null, error: error.message || 'Unable to submit the form.' });
    }
  };

  return (
    <div className="page-content" style={{ padding: '60px 24px', maxWidth: '580px', margin: '0 auto' }}>
      <div className="contact-wrap">
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px', textAlign: 'center' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>Have a project in mind? Let's build something extraordinary together.</p>

        <div className="contact-info-box">
          <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '12px' }}>Our Office</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            #52, 3rd Cross, Aswanth Nagar,<br/>
            Marathahalli, Bengaluru,<br/>
            Karnataka-560037
          </p>
          <a href="mailto:solutions@nexacore.com" className="email" style={{ color: '#3b82f6', fontWeight: 500, marginTop: '10px', display: 'inline-block', textDecoration: 'none' }}>solutions@nexacore.com</a>
        </div>

        {status.success && (
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
            {status.success}
          </div>
        )}

        {status.error && (
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#f87171', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
            {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Your name" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="How can we help?" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn-submit" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
