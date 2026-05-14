import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.jpeg';

const Logo = () => (
  <img src={logoUrl} alt="ML LABS Logo" className="w-full h-full object-contain" />
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const getLinkClass = (path) => {
    const baseClass = "text-on-surface text-sm font-medium hover:text-primary transition-colors";
    return location.pathname === path ? `${baseClass} text-primary font-bold border-b-2 border-primary pb-1` : baseClass;
  };

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant px-margin-mobile lg:px-margin-desktop py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 text-primary hover:opacity-80 transition-opacity">
          <div className="w-8 h-8">
            <Logo />
          </div>
          <h2 className="text-on-surface text-lg font-bold leading-tight tracking-[-0.015em]">ML LABS</h2>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary-container text-white text-sm font-bold transition-all hover:opacity-90">
            <span className="truncate">Consult Experts</span>
          </Link>
        </nav>

        <button 
          className="md:hidden p-2 text-on-surface"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant shadow-lg py-4 px-margin-mobile flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={getLinkClass(link.path)}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary-container text-white text-sm font-bold transition-all hover:opacity-90"
            onClick={() => setIsMenuOpen(false)}
          >
            Consult Experts
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
