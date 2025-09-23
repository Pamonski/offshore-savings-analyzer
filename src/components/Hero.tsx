import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="hero-gradient absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Forecast Your Offshore Savings in{" "}
              <span className="text-accent">5 Minutes</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our AI-powered diagnostic tool generates a personalized report to calculate your cost savings,
              create optimized job descriptions, and provide a roadmap for building a high-performing global team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/questionnaire">
                <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto">
                  Start Your Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="cta-outline" size="lg" className="text-lg px-8 py-4 h-auto text-white border-white/30 hover:bg-white/10">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 animate-fade-up-delay">
            <div className="relative">
              <img
                src={heroImage}
                alt="AI-powered offshore diagnostic tool showing data analysis and global connectivity"
                className="w-full h-auto rounded-2xl shadow-soft animate-scale-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;