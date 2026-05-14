import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer style={{ background: '#07070f', padding: '60px 48px 30px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="footer-brand">
          <div className="logo-text" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={logo} alt="Nexacore logo" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            Nexacore
          </div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '8px' }}>
            Advancing the frontier of corporate intelligence through rigorous data engineering and AI implementation.
          </p>
        </div>
        
        <div className="footer-col">
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>Services</h4>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/services" style={{ textDecoration: 'none' }}>Data Science</Link>
            <Link to="/services" style={{ textDecoration: 'none' }}>Data Engineering</Link>
            <Link to="/services" style={{ textDecoration: 'none' }}>DevOps</Link>
            <Link to="/services" style={{ textDecoration: 'none' }}>Artificial Intelligence</Link>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>Company</h4>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link>
            <Link to="#" style={{ textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="#" style={{ textDecoration: 'none' }}>Terms of Service</Link>
            <a href="#" style={{ textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>Contact</h4>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '8px' }}>
            #52, 3rd Cross, Aswanth Nagar,<br />
            Marathahalli, Bengaluru,<br />
            Karnataka-560037
          </p>
          <p style={{ color: '#3b82f6', marginTop: '12px', fontSize: '0.85rem' }}>solutions@nexacore.com</p>
        </div>
      </div>
      
      <div className="footer-bottom" style={{ textAlign: 'center', paddingTop: '24px', marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
        &copy; 2024 Nexacore AI Technologies. All rights reserved.
      </div>
    </footer>
  );
}
