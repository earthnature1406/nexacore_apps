import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="page-content">
      <div className="section" style={{ padding: '70px 48px' }}>
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '1.9rem', fontWeight: 700, marginBottom: '56px' }}>Our Services</h2>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '860px', margin: '0 auto' }}>
          <div className="service-card">
            <div className="svc-icon">
              <svg viewBox="0 0 48 48"><rect x="6" y="8" width="28" height="32" rx="2"/><line x1="12" y1="18" x2="28" y2="18"/><line x1="12" y1="24" x2="28" y2="24"/><line x1="12" y1="30" x2="22" y2="30"/><circle cx="36" cy="34" r="8"/><line x1="32" y1="34" x2="40" y2="34"/><line x1="36" y1="30" x2="36" y2="38"/></svg>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px' }}>Data Science</h3>
            <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: '16px' }}>Unlock insights from your data with advanced analytics and predictive modeling.</p>
            <Link to="/contact" style={{ color: '#3b82f6', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Learn More</Link>
          </div>
          <div className="service-card">
            <div className="svc-icon">
              <svg viewBox="0 0 48 48"><ellipse cx="24" cy="12" rx="16" ry="6"/><path d="M8 12v10c0 3.3 7.2 6 16 6s16-2.7 16-6V12"/><path d="M8 22v10c0 3.3 7.2 6 16 6s16-2.7 16-6V22"/><line x1="36" y1="30" x2="42" y2="36"/><circle cx="44" cy="38" r="3"/></svg>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px' }}>Data Engineering</h3>
            <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: '16px' }}>Build robust data pipelines and infrastructure for scalable information management.</p>
            <Link to="/contact" style={{ color: '#3b82f6', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Learn More</Link>
          </div>
          <div className="service-card">
            <div className="svc-icon">
              <svg viewBox="0 0 48 48"><rect x="6" y="28" width="36" height="14" rx="3"/><path d="M14 28V20a10 10 0 0120 0v8"/><circle cx="24" cy="35" r="2"/><path d="M38 10l4 4-4 4"/><path d="M10 10l-4 4 4 4"/><line x1="18" y1="14" x2="30" y2="14"/></svg>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px' }}>DevOps</h3>
            <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: '16px' }}>Streamline development and operations with automated workflows and cloud solutions.</p>
            <Link to="/contact" style={{ color: '#3b82f6', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Learn More</Link>
          </div>
          <div className="service-card">
            <div className="svc-icon">
              <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="6"/><path d="M24 8c-2 0-4 4-4 10M24 8c2 0 4 4 4 10M24 40c-2 0-4-4-4-10M24 40c2 0 4-4 4-10M8 24c0-2 4-4 10-4M8 24c0 2 4 4 10 4M40 24c0-2-4-4-10-4M40 24c0 2-4 4-10 4"/></svg>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px' }}>Artificial Intelligence</h3>
            <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: '16px' }}>Implement cutting-edge AI and machine learning to automate and innovate.</p>
            <Link to="/contact" style={{ color: '#3b82f6', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
