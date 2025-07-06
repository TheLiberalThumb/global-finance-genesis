import { Card, CardContent } from '@/components/ui/card';

const CompanyJourney = () => {
  const milestones = [
    {
      year: '2009',
      title: 'Foundation',
      description: 'Founded with vision to democratize corporate finance and bridge funding gaps in emerging markets',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop',
      side: 'left'
    },
    {
      year: '2015',
      title: 'Nigeria PPP Mandate',
      description: 'Mandated by Albader International for landmark public-private partnership project',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop',
      side: 'right'
    },
    {
      year: '2018',
      title: 'Regional Expansion',
      description: 'Expanded operations across Middle East and Africa, establishing key partnerships',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=300&fit=crop',
      side: 'left'
    },
    {
      year: '2022',
      title: '$300M Refinery Project',
      description: 'Secured funding for Akwa Ibom refinery project, advancing energy independence',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop',
      side: 'right'
    },
    {
      year: '2024',
      title: 'Waste-to-Energy Initiative',
      description: 'Launched sustainable energy solutions with Lagos State government partnership',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      side: 'left'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Celebrating 15+ years of transformational growth and expanding into new sectors',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop',
      side: 'right'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6 fade-in-up">Our Journey</h2>
          <p className="body-text text-xl text-light-gray max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Milestones that shaped our path to becoming a trusted global investment partner
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-rich-gold/30"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex ${milestone.side === 'left' ? 'justify-start' : 'justify-end'} scroll-triggered ${milestone.side === 'left' ? 'milestone-enter-left' : 'milestone-enter-right'}`} style={{animationDelay: `${index * 0.2}s`}}>
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rich-gold rounded-full border-4 border-background shadow-lg z-10 timeline-dot ${index <= 3 ? 'active' : ''}`}></div>
                
                {/* Content Card */}
                <Card className={`wlf-card-premium w-full max-w-md ${milestone.side === 'left' ? 'mr-8' : 'ml-8'}`}>
                  <div className="aspect-[5/3] overflow-hidden rounded-t-lg interactive-image">
                    <img 
                      src={`${milestone.image}&auto=format&q=80`}
                      alt={milestone.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-rich-gold rounded-full flex items-center justify-center">
                        <span className="font-bold text-dark-navy text-sm">{milestone.year}</span>
                      </div>
                      <h3 className="heading-md text-foreground">{milestone.title}</h3>
                    </div>
                    <p className="body-text text-light-gray">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyJourney;