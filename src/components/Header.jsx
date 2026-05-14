import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(10,10,18,0.97)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0 48px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
        <svg viewBox="0 0 28 28" fill="none" stroke="#3b82f6" strokeWidth="1.6" style={{ width: '28px', height: '28px' }}>
          <circle cx="14" cy="14" r="12" />
          <ellipse cx="14" cy="14" rx="5" ry="12" />
          <line x1="2" y1="14" x2="26" y2="14" />
          <line x1="4" y1="8" x2="24" y2="8" />
          <line x1="4" y1="20" x2="24" y2="20" />
        </svg>
        Nexacore
      </Link>
      <div className="nav-links" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        <Link to="/" className={path === '/' ? 'active' : ''} style={{ fontSize: '0.9rem', color: path === '/' ? '#fff' : 'rgba(255,255,255,0.75)', fontWeight: 400, textDecoration: 'none' }}>Home</Link>
        <Link to="/about" className={path === '/about' ? 'active' : ''} style={{ fontSize: '0.9rem', color: path === '/about' ? '#fff' : 'rgba(255,255,255,0.75)', fontWeight: 400, textDecoration: 'none' }}>About Us</Link>
        <Link to="/services" className={path === '/services' ? 'active' : ''} style={{ fontSize: '0.9rem', color: path === '/services' ? '#fff' : 'rgba(255,255,255,0.75)', fontWeight: 400, textDecoration: 'none' }}>Services</Link>
        <Link to="/careers" className={path === '/careers' ? 'active' : ''} style={{ fontSize: '0.9rem', color: path === '/careers' ? '#fff' : 'rgba(255,255,255,0.75)', fontWeight: 400, textDecoration: 'none' }}>Careers</Link>
        <Link to="/contact" className={path === '/contact' ? 'active' : ''} style={{ fontSize: '0.9rem', color: path === '/contact' ? '#fff' : 'rgba(255,255,255,0.75)', fontWeight: 400, textDecoration: 'none' }}>Contact Us</Link>
      </div>
    </nav>
  );
}
