

export default function Careers() {
  return (
    <div className="page-content">
      <div className="careers-hero">
        <h1>Join the Future</h1>
        <p>Shape the future of AI with a world-class team at Nexacore AI Technologies.</p>
      </div>
      <div className="blue-line"></div>
      <div className="positions-section" style={{ padding: '50px 48px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>Open Positions</h2>
        <div className="positions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div className="position-card">
            <div className="position-badge">1 Position Open</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Data Scientist</h3>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '18px' }}>Apply advanced statistical models and machine learning algorithms to extract actionable insights from complex datasets.</p>
            <button className="btn-apply">Apply Now</button>
          </div>
          <div className="position-card">
            <div className="position-badge">1 Position Open</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Data Engineer</h3>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '18px' }}>Design and build scalable data pipelines and infrastructure to support analytics and AI applications at scale.</p>
            <button className="btn-apply">Apply Now</button>
          </div>
          <div className="position-card">
            <div className="position-badge">1 Position Open</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>AI/ML Engineer</h3>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '18px' }}>Develop and deploy cutting-edge AI models and machine learning systems that power intelligent automation.</p>
            <button className="btn-apply">Apply Now</button>
          </div>
          <div className="position-card">
            <div className="position-badge">1 Position Open</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>DevOps Engineer</h3>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '18px' }}>Build and maintain CI/CD pipelines, cloud infrastructure, and monitoring systems for high-availability deployments.</p>
            <button className="btn-apply">Apply Now</button>
          </div>
        </div>
      </div>
      <div className="benefits-section" style={{ padding: '10px 48px 60px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '28px' }}>Benefits</h2>
        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', maxWidth: '760px' }}>
          <div className="benefit">
            <div className="benefit-icon" style={{ marginBottom: '12px' }}>
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            </div>
            <h3 style={{ fontSize: '0.97rem', fontWeight: 700, marginBottom: '8px' }}>Health & Wellness</h3>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>Comprehensive health coverage, mental wellness programs, and accessibility for you and your family.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon" style={{ marginBottom: '12px' }}>
              <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            </div>
            <h3 style={{ fontSize: '0.97rem', fontWeight: 700, marginBottom: '8px' }}>Learning & Development</h3>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>Professional growth resources, conference budgets, online courses, and mentorship for continuous learning.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon" style={{ marginBottom: '12px' }}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 style={{ fontSize: '0.97rem', fontWeight: 700, marginBottom: '8px' }}>Flexibility & Remote</h3>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>Work-life balance with flexible hours and fully remote options so you can thrive from anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
