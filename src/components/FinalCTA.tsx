import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your Company's Full Potential?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Get the data-driven insights you need to make smarter, more profitable hiring decisions.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Clock className="h-8 w-8 text-accent mb-3" />
              <div className="text-white font-semibold">5 Minutes</div>
              <div className="text-white/80 text-sm">Quick Analysis</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-accent mb-3" />
              <div className="text-white font-semibold">Up to 60%</div>
              <div className="text-white/80 text-sm">Cost Savings</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <ArrowRight className="h-8 w-8 text-accent mb-3" />
              <div className="text-white font-semibold">Instant Results</div>
              <div className="text-white/80 text-sm">Actionable Report</div>
            </div>
          </div>
          
          <Link to="/questionnaire">
            <Button variant="cta" size="lg" className="text-xl px-12 py-6 h-auto">
              Get My Free Personalized Report Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          
          <p className="text-white/70 text-sm mt-6">
            No credit card required • 100% free analysis • Results in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;