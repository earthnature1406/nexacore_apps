const Services = () => {
  return (
    <div className="px-4 md:px-10 py-12 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-3 mb-12">
        <h1 className="text-on-background font-display-lg text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Enterprise Solutions</h1>
        <p className="text-on-surface-variant font-body-lg text-lg font-normal leading-normal max-w-2xl">
          We bridge the gap between complex data research and scalable business applications. Our elite team of engineers and scientists build the intelligent infrastructure of tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-16">
        {/* Service 1 */}
        <div className="flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-video w-full overflow-hidden bg-slate-200">
             <img 
              className="w-full h-full object-cover" 
              alt="Machine Learning Engineering"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpLtnTUjAnP5V2GiTT49QCCa0P8PqRUjIrNFvJEjqB2KBHn8O9zrXqGOcItEsLJ5c-HlPBZF2HUEaw0aF7NCK4MOYqKtjR7jEyWWGPMD5nOHJmFdqbq6J-ExsDfUwANIDFAv5ZsCSw7G8IcLt74EGvIdEjYdb9p5RcuXrDxXdRoyeYhxEF94VGltkb3jQjIJ6OS94wUHDNOB255Vcnj0hxvOKQTnnrSgU-F0vFwfLu2VfEsOHaj49-ysCiNxe8ndnruoP13qNu_iJA" 
            />
          </div>
          <div className="p-lg flex flex-col gap-md flex-grow">
            <div className="flex items-center gap-sm text-primary">
              <span className="material-symbols-outlined">engineering</span>
              <span className="font-label-md text-label-md uppercase tracking-wider">Engineering</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background">Machine Learning Engineering</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Transition your experiments into hardened production environments. We design robust ETL pipelines, implement model versioning (MLOps), and ensure low-latency inference at scale.
            </p>
            <div className="mt-sm">
              <button className="w-full md:w-auto px-lg h-10 rounded bg-primary text-on-primary font-bold text-sm tracking-wider flex items-center justify-center gap-2">
                Get Started <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-video w-full overflow-hidden bg-slate-200">
            <img 
              className="w-full h-full object-cover" 
              alt="Data Science Consulting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2w0KYDxHuZkzUkLBQLLZWH6rTSNPyT7K7dsikDoXlfCylrCPm_leTQVQtMaj3R3erGFy6s0Vu2lsg3ydeSEqFmRKr3itJFiKIxa8_nw-p5PF8nf2bZAwatIqPAUJux4NVMMEZqE8f4LVLpmdbpOHSYnmJhCXEMGi9L_kbJaI-A0Agj94HWQu_7W7-Ta8KEJ0LzEaHgwQQn7bgiOFGOIMdn4FzuG8WLtReDucbT_AgBDVvxx7ZdGSdJbV-Z65R4JJNysCgujmH8EDF" 
            />
          </div>
          <div className="p-lg flex flex-col gap-md flex-grow">
            <div className="flex items-center gap-sm text-primary">
              <span className="material-symbols-outlined">insights</span>
              <span className="font-label-md text-label-md uppercase tracking-wider">Consulting</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background">Data Science Consulting</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Strategic guidance to turn your raw data into a competitive moat. We perform deep statistical analysis, build predictive models, and help you identify the highest-ROI AI opportunities.
            </p>
            <div className="mt-sm">
              <button className="w-full md:w-auto px-lg h-10 rounded bg-primary text-on-primary font-bold text-sm tracking-wider flex items-center justify-center gap-2">
                Get Started <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Banner */}
      <div className="bg-primary-container rounded-xl p-lg flex flex-col md:flex-row items-center justify-between gap-lg">
        <div className="text-on-primary-container max-w-xl">
          <h2 className="font-headline-lg text-headline-lg mb-sm">Ready to accelerate your ML journey?</h2>
          <p className="font-body-lg text-body-lg opacity-90">Schedule a 30-minute discovery call with our lead engineers to explore how our specialized services can drive your growth.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-md">
          <button className="px-xl h-12 bg-on-primary-fixed text-on-primary font-bold rounded flex items-center gap-2 transition-all hover:opacity-90">
            <span className="material-symbols-outlined">calendar_today</span>
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
