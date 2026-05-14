import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-content">
      <div className="hero">
        <h1>Pioneering the Future of Intelligent Technology</h1>
        <p>Nexacore AI Technologies is at the forefront of pioneering the future of Intelligent Technology with improved, modern typography and innovative framework.</p>
        <div className="btn-row">
          <Link to="/services">
            <button className="btn-primary">Explore Services</button>
          </Link>
          <Link to="/about">
            <button className="btn-outline">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="section" style={{ padding: '70px 48px' }}>
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '1.9rem', fontWeight: 700, marginBottom: '56px' }}>Our Core Values</h2>
        <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>Cutting-Edge Innovation</h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>We harness thin-line innovative and next-generation technology to push the boundaries of what's possible.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>Precision Targeting</h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>Innovative goal-driven approaches combined with our event-driven systems ensure unmatched accuracy.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z"/></svg>
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>Enterprise Security</h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>All our systems feature enterprise-grade security, operating in the most demanding production environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
