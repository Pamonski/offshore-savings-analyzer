import { ClipboardList, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Complete the Diagnostic",
    description: "Answer a few key questions about your business, industry, and the roles you're considering offshoring."
  },
  {
    icon: FileText,
    title: "Receive Your Instant Report",
    description: "Get an AI-generated analysis with your personalized savings forecast, AI-enhanced job descriptions, and data-driven insights."
  },
  {
    icon: Rocket,
    title: "Accelerate Your Growth",
    description: "Use our proven frameworks for management, communication, and cultural alignment to build a successful offshore team from day one."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Your Personalized Roadmap in 3 Simple Steps
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-soft">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;