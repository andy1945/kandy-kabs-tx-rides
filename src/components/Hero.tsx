import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-transportation.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const typewriterText = useTypewriter({
    words: [
      "Wheelchair accessible rides",
      "Chemo & dialysis trips", 
      "Nursing-home and hospital visits"
    ],
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional medical transportation service in Princeton, TX"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <span className="inline-block animate-slide-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">Safe medical</span>{" "}
            <span className="inline-block animate-slide-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards] bg-gradient-to-r from-accent-light to-success bg-clip-text text-transparent">transportation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
            <span className="inline-block min-h-[2em]">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:2.4s] opacity-0 [animation-fill-mode:forwards]">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Calendar className="h-5 w-5" />
              Book Your Ride Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm">
              <Phone className="h-5 w-5" />
              Call (972) 555-KAND
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;