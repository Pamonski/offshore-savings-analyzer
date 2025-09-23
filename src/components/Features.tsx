import { DollarSign, Brain, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Million-Dollar Savings Forecaster",
    description: "Instantly see your potential net profit uplift. Our calculator shows how offshoring roles can lead to savings of up to 60% compared to onshore costs in the USA and Australia."
  },
  {
    icon: Brain,
    title: "AI-Amplified Role Descriptions",
    description: "Move beyond basic job descriptions. Get AI-enhanced profiles that include recommendations for automation, modern KPIs, and the ideal offshore salary range."
  },
  {
    icon: Zap,
    title: "Offshore Results Acceleration Frameworks",
    description: "Access our library of frameworks for running effective 1:1s, implementing deep work practices, and ensuring cultural and communication alignment."
  },
  {
    icon: Shield,
    title: "Australia-Specific Compliance",
    description: "For our Australian clients, the report includes a dedicated section covering essential compliance and legal considerations for hiring offshore."
  }
];

const Features = () => {
  return (
    <section className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            What Your Personalized Report Includes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get comprehensive insights tailored to your business needs and industry requirements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 animate-scale-hover"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;