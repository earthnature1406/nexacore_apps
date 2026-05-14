import { Link, Navigate } from 'react-router-dom';

const NotFound = () => {
  if (typeof window !== 'undefined' && window.location.pathname.endsWith('/index.html')) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.4em] mb-4">Page not found</p>
        <h1 className="text-on-surface text-4xl md:text-5xl font-bold mb-6">We couldn’t find that page.</h1>
        <p className="text-on-surface-variant text-lg mb-8">The page you are looking for does not exist or has been moved. Return to the homepage to continue exploring.</p>
        <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-white font-semibold hover:bg-primary/90 transition-colors">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
