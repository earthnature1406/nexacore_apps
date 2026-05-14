export default function About() {
  return (
    <div className="page-content">
      <div className="hero">
        <h1>About Nexacore</h1>
        <p>We are a team of passionate technologists, data scientists, and AI engineers building the future of intelligent systems.</p>
      </div>
      <div className="section" style={{ padding: '70px 48px' }}>
        <div className="about-content" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '20px' }}>
            Nexacore AI Technologies was founded with a singular mission: to harness the power of artificial intelligence, data engineering, and cloud infrastructure to help organizations unlock their full potential.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '20px' }}>
            Our team of world-class engineers and researchers work at the intersection of cutting-edge research and practical application — delivering solutions that are not just innovative, but truly transformative.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '20px' }}>
            From predictive analytics to real-time data pipelines and autonomous AI systems, Nexacore is your trusted partner in the digital transformation journey.
          </p>
          <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '600px', margin: '50px auto 0', textAlign: 'center' }}>
            <div className="stat">
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#3b82f6' }}>50+</h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>Projects Delivered</p>
            </div>
            <div className="stat">
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#3b82f6' }}>30+</h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>Expert Engineers</p>
            </div>
            <div className="stat">
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#3b82f6' }}>15+</h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>Global Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
