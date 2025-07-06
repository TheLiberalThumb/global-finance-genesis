const ProcessFlow = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive assessment of your business, market position, and strategic objectives."
    },
    {
      number: "02", 
      title: "Strategy Development",
      description: "Crafting tailored solutions that align with your goals and market opportunities."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Expert execution with continuous monitoring and optimization throughout the process."
    },
    {
      number: "04",
      title: "Value Realization",
      description: "Ensuring sustainable results and long-term value creation for all stakeholders."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Our Proven Process
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            A systematic approach that ensures optimal outcomes and sustainable value creation for every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className={`text-center scroll-fade-up scroll-stagger-${index + 1}`}>
              <div className="w-20 h-20 bg-rich-gold text-dark-navy rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                {step.number}
              </div>
              <h3 className="font-playfair font-semibold text-xl text-foreground mb-4">
                {step.title}
              </h3>
              <p className="font-inter text-sm text-light-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;