import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Calendar, CreditCard, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional Studio" 
          className="w-full h-full object-cover parallax-bg"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your 
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-float">
                  Studio Management
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Streamline operations, boost member engagement, and grow your business with our comprehensive studio management platform.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">Automated scheduling and booking system</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">Seamless payment processing and billing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">Comprehensive member management tools</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="hero" 
                className="group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="hero"
                className="border-white/30 text-white hover:bg-white hover:text-black"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm mb-4">Trusted by 500+ studios worldwide</p>
              <div className="flex items-center space-x-8 text-white/60">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="text-sm">10,000+ Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm">50,000+ Classes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm">98% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:block space-y-6 animate-fade-in-right">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift transition-all duration-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg animate-float">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Smart Scheduling</h3>
              </div>
              <p className="text-white/80">
                Automated booking system with real-time availability and conflict prevention.
              </p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift transition-all duration-500" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Payment Processing</h3>
              </div>
              <p className="text-white/80">
                Secure payment gateway with automated billing and subscription management.
              </p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift transition-all duration-500" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg animate-float" style={{ animationDelay: '2s' }}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Member Management</h3>
              </div>
              <p className="text-white/80">
                Complete member profiles with attendance tracking and personalized experiences.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}