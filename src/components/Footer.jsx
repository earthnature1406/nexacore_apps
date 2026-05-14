import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-margin-mobile lg:px-margin-desktop py-xl max-w-[1440px] mx-auto gap-xl">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-md">
            <div className="w-6 h-6 text-primary">
              <img src={logoUrl} alt="ML LABS Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-on-surface text-lg font-bold tracking-tight">ML LABS</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-md leading-relaxed">
            ML LABS PRIVATE LIMITED.<br />
            #52, 3rd Cross, Aswath Nagar,<br />
            Marathahalli, Bengaluru,<br />
            Karnataka-560037.
          </p>
          <div className="flex gap-md">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">language</span></a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-xxl w-full md:w-auto">
          <div className="flex flex-col gap-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase font-bold mb-xs">Platform</span>
            <Link to="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">About Us</Link>
            <Link to="/services" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Services</Link>
            <Link to="/careers" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Careers</Link>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase font-bold mb-xs">Legal</span>
            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Terms of Service</a>
            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className="px-margin-mobile lg:px-margin-desktop py-md max-w-[1440px] mx-auto border-t border-outline-variant text-center md:text-left">
        <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">© 2018 ML LABS PRIVATE LIMITED. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
