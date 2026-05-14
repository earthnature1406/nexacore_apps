const About = () => {
  return (
    <div className="px-4 md:px-10 py-12 flex flex-col items-center">
      <div className="text-center max-w-[1200px] w-full">
        <h1 className="text-on-surface font-display-lg text-5xl font-black leading-tight tracking-[-0.033em] mb-6">About ML LABS PRIVATE LIMITED</h1>
        <p className="text-on-surface-variant font-body-lg text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-16">
          Pioneering the future of artificial intelligence with precision and integrity. We are a team of data scientists, engineers, and visionaries dedicated to making the complex simple.
        </p>

        <div className="mb-16">
          <img 
            className="w-full h-[400px] object-cover rounded-xl shadow-md" 
            alt="Team Collaboration"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUrU6PI5v1S8XxS1wDxnUAs-eneIW95HbLqX6W_Pc3EwliVh0gEWqWb6owvfnFhZJNPTxjhrTUdt4AxwNLt76xZ78PWDHLaxX9Ad4IEAcmGpNdzZeX3dbkR2FB2HGBZhotYuD4gHRea8_tVjepG4FE50y5weU_8uFcSY02WGSTnrJ472IhZK-v-tDGWFEyCYJfPhdGxLc3vioTIoaGFZciekabE_R_he2eA6dyUV1xIzl7FeTtFVItsPhhwLM25Sk7oQbNzzRHtlIx" 
          />
        </div>

        {/* Mission Statement */}
        <section className="p-12 bg-surface-container-low rounded-xl mb-16 border border-outline-variant text-left">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-primary font-headline-lg text-3xl font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">rocket_launch</span>
              Our Mission
            </h2>
            <p className="text-on-surface font-body-lg text-lg leading-relaxed mb-6">
              At ML LABS, our mission is to deliver state-of-the-art machine learning solutions that solve complex global challenges. We strive to empower businesses through data-driven insights, ensuring that innovation leads to tangible progress for our clients and the world at large.
            </p>
            <p className="text-on-surface font-body-lg text-lg leading-relaxed">
              We believe that AI should not be a black box but a transparent, reliable tool that enhances human capability. By focusing on ethical development and algorithmic precision, we bridge the gap between academic research and commercial reality.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20 text-left">
          <h2 className="text-on-surface font-headline-lg text-[32px] font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="flex flex-col p-8 bg-surface-container rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="bg-primary text-on-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h3 className="text-on-surface font-headline-md text-xl font-bold mb-4">Innovation</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                We push the boundaries of what is possible in ML. Constant experimentation and curiosity drive our product roadmap and support ongoing team growth.
              </p>
            </div>
            <div className="flex flex-col p-8 bg-surface-container rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="bg-primary text-on-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">biotech</span>
              </div>
              <h3 className="text-on-surface font-headline-md text-xl font-bold mb-4">Precision</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Data integrity is at the heart of everything we do. We demand accuracy in our models and clarity in our results to ensure client trust.
              </p>
            </div>
            <div className="flex flex-col p-8 bg-surface-container rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="bg-primary text-on-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <h3 className="text-on-surface font-headline-md text-xl font-bold mb-4">Integrity</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                We build responsible AI. Our commitment to ethics, security, and transparency ensures that our solutions respect privacy and human values.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
