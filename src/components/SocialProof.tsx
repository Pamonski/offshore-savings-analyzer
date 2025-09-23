import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This tool gave us the clarity and confidence to build our offshore team. We've already saved over $250,000 in operational costs.",
    name: "Sarah Chen",
    title: "CEO",
    company: "TechFlow Solutions"
  },
  {
    quote: "The AI-enhanced job descriptions were spot-on. We found the perfect candidates within weeks and our productivity increased by 40%.",
    name: "Michael Rodriguez",
    title: "Founder",
    company: "Digital Marketing Pro"
  },
  {
    quote: "The compliance section for Australian businesses was invaluable. We avoided costly mistakes and set up our offshore operations correctly from day one.",
    name: "Jennifer Walsh",
    title: "Operations Director", 
    company: "Melbourne Consulting Group"
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Trusted by Forward-Thinking Companies
          </h2>
          <div className="flex justify-center items-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent fill-current" />
            ))}
            <span className="ml-3 text-muted-foreground font-medium">
              4.9/5 from 200+ business leaders
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-secondary rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 animate-scale-hover relative"
            >
              <Quote className="h-8 w-8 text-accent mb-6" />
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;