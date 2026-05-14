import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-xxl px-margin-mobile lg:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
              <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              <span className="text-label-md">NEXT-GEN AI SOLUTIONS</span>
            </div>
            <h1 className="text-on-surface font-display-lg text-display-lg leading-tight">
              Pioneering the Future of <span className="text-primary">Intelligent Technology</span>
            </h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-[600px]">
              ML LABS PRIVATE LIMITED delivers cutting-edge AI and Machine Learning solutions to transform your business operations and drive data-driven growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/services" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-md font-bold shadow-md hover:translate-y-[-2px] transition-all">
                Explore Services
              </Link>
              <Link to="/about" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 border-2 border-outline text-on-surface text-md font-bold hover:bg-surface-container transition-all">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl bg-surface-container-highest">
              <img 
                alt="Advanced AI Visualization" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMiCsMRXi5cPH1g7ZWaP_sMG_OjunsfhwNEQZ1vOcPCNfdI2doYtQukeeH5JpcUMvg1Zd6Tabu8ThbodlLHf-APWXDJjDCbT3TYhh-gVOKm4poekcciZMaaeduTAFDHuQJleNztViAs4i8G7oBPMrhAt_DjYCUmE-6gpwumcU7B65Jy58lC6D72Tht2jeSTpDMx7FMdQbYkrZxCsLFsDXIaeMZod5fnVV4EzZmMC1dtvAswh9ADnMFTFDi7w2AAlm6BnyRsu6ZDwJD" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-outline-variant hidden md:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">query_stats</span>
                </div>
                <div>
                  <p className="text-label-md text-on-surface-variant">Efficiency Increase</p>
                  <p className="text-headline-sm text-primary">+45% Yearly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      </section>

      {/* About Us Preview */}
      <section className="py-xxl px-margin-mobile lg:px-margin-desktop bg-surface-container-low" id="about">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">About ML LABS</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-on-surface">
                At ML LABS PRIVATE LIMITED, we bridge the gap between complex data and actionable intelligence. Our mission is to empower global enterprises with bespoke machine learning models and sophisticated analytical tools that redefine industry standards and foster innovation.
              </p>
              <div className="grid grid-cols-2 gap-lg pt-6">
                <div className="flex flex-col gap-1">
                  <span className="font-headline-md text-headline-md text-primary">500+</span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">Models Deployed</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-headline-md text-headline-md text-primary">98%</span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">Client Retention</span>
                </div>
              </div>
              <Link to="/about" className="inline-block mt-4 text-primary font-bold hover:underline">Read our full story →</Link>
            </div>
            <div className="bg-surface p-4 rounded-xl shadow-lg border border-outline-variant">
              <img 
                alt="Team Collaboration" 
                className="rounded-lg w-full h-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmmcW40HQpjerZaACP0GxVtUnuVbICVcCcip4WU0isBfyjmjBRMD3NBAlg0sfWmdBuhWr5pFLavCiVQsMGzdTot-yckf7gMufYnyj-qAOzXjM-49-ZQLHS5OWvjXFksN3Xci3KCTq8zRssRDQcNCt5xIydw0ooCJq7yogtbeMtF7Y373Ad3DNfk97csXOYbfnOmLpRwKrrnQZMr0q8uK7EilIuyOREYmPZZLaL8_4MkDPBFokET69ALajXttDaDifB8j1YGfPDsdtW" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-xxl px-margin-mobile lg:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Core Services</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[700px] mx-auto">Providing specialized expertise across the entire spectrum of modern data intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {[
              { icon: 'psychology', title: 'Artificial Intelligence', desc: 'Developing autonomous systems and generative AI architectures tailored for enterprise-scale deployment.' },
              { icon: 'model_training', title: 'Machine Learning', desc: 'Custom predictive modeling, NLP, and computer vision solutions that evolve with your data.' },
              { icon: 'data_exploration', title: 'Data Analytics', desc: 'Transforming raw data into strategic insights through advanced visualization and statistical processing.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-surface-container-high rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[32px]">{service.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-3">{service.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-xl">
            <Link to="/services" className="inline-block px-8 py-3 bg-surface-container-highest text-on-surface font-bold rounded hover:bg-outline-variant transition-colors">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-xxl px-margin-mobile lg:px-margin-desktop bg-primary text-white">
        <div className="max-w-[960px] mx-auto text-center space-y-8">
          <h2 className="font-headline-lg text-headline-lg">Ready to transform your business data?</h2>
          <p className="font-body-lg text-body-lg opacity-90">Join the leaders who are already leveraging our ML insights to dominate their industries.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              className="w-full max-w-[400px] h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" 
              placeholder="Enter your business email" 
              type="email"
            />
            <button className="h-12 px-8 bg-white text-primary font-bold rounded-lg hover:bg-surface-container-lowest transition-colors whitespace-nowrap">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
