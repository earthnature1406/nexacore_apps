const Careers = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-on-background">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            alt="Join the Future of AI" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1-2prE9bf1CkiZaGjrzboo7gFyRuDiXkX3Y0DL11VJIK0VFsyjIuiLTqndfEn7Fixvu7_Nqjj_hQZru_CJPwhjuv1yXIfFYrRJGczTfvkQeRo7jt5n1K6lrREWbAz7y-nGwRdZWpLNLMVdajLXMLyvkkv_fCzAdCkTL9W9BTSZ611dO2EMnBSTuuLsM4LXq9ZhCGHdlnRvnKYQ50CRjuEXxHJVVVHFnvx-TtgxrRD8Rx5JOAc5v0yx6ScT_THMBZWDNtQ_Ur3VT5y" 
          />
        </div>
        <div className="relative z-10 w-full px-margin-desktop max-w-[1440px] mx-auto">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-display-lg text-white mb-md">Join the Future of AI</h1>
            <p className="font-body-lg text-body-lg text-surface-variant mb-xl">
              At ML LABS, we are building the next generation of precision intelligence. We seek visionary minds to solve complex enterprise challenges through cutting-edge machine learning.
            </p>
            <a href="#open-positions" className="bg-primary text-on-primary px-xl py-md rounded-lg font-body-md font-bold hover:bg-opacity-90 transition-all inline-block">
              View Openings
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-surface-container py-xxl">
        <div className="px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg">Designed for High Performance</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-sm">We take care of the details so you can focus on the data.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            <div className="bg-surface-bright p-xl rounded-xl shadow-sm border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-3xl mb-md">health_and_safety</span>
              <h4 className="font-headline-sm text-headline-sm mb-xs">Comprehensive Health</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Top-tier health insurance for you and your family, with a focus on mental wellness.</p>
            </div>
            <div className="bg-surface-bright p-xl rounded-xl shadow-sm border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-3xl mb-md">school</span>
              <h4 className="font-headline-sm text-headline-sm mb-xs">Learning Stipends</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Annual budget for conferences, certifications, and advanced degrees in STEM.</p>
            </div>
            <div className="bg-surface-bright p-xl rounded-xl shadow-sm border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-3xl mb-md">calendar_today</span>
              <h4 className="font-headline-sm text-headline-sm mb-xs">Flexible Schedules</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Hybrid work model and flexible hours to accommodate your peak productivity cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Board Section */}
      <section className="py-xxl px-margin-desktop max-w-[1440px] mx-auto" id="open-positions">
        <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
          <div>
            <h2 className="font-headline-lg text-headline-lg">Open Positions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Current opportunities at our Bengaluru Headquarters.</p>
          </div>
        </div>
        
        <div className="space-y-md">
          {[
            { title: 'Senior ML Engineer', dept: 'Engineering', type: 'Full-Time' },
            { title: 'Data Scientist', dept: 'Data Science', type: 'Full-Time' },
            { title: 'Research Lead', dept: 'Research', type: 'Full-Time' },
            { title: 'Frontend Developer (React)', dept: 'Engineering', type: 'Full-Time' }
          ].map((job, index) => (
            <div key={index} className="group flex flex-col md:flex-row justify-between items-start md:items-center p-lg bg-surface-bright border border-outline-variant rounded-xl hover:border-primary transition-all cursor-pointer">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{job.title}</h3>
                <div className="flex gap-md mt-xs">
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-tighter">{job.dept}</span>
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-tighter">{job.type}</span>
                </div>
              </div>
              <div className="mt-md md:mt-0 flex items-center gap-md">
                <span className="font-body-md text-body-md text-on-surface-variant">Bengaluru HQ</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
