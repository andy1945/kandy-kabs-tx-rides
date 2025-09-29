import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-transportation.jpg";
import caringServiceImage from "@/assets/caring-service.jpg";
import vehicleInteriorImage from "@/assets/vehicle-interior.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    heroImage,
    caringServiceImage,
    vehicleInteriorImage
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-[100svh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Animation */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Professional medical transportation service background ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <span className="inline-block animate-slide-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">Safe medical</span>{" "}
            <span className="inline-block animate-slide-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards] bg-gradient-to-r from-accent-light to-success bg-clip-text text-transparent">transportation</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:1s] opacity-0 [animation-fill-mode:forwards] px-2">
            <span className="inline-block min-h-[2.5em] sm:min-h-[2em]">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in [animation-delay:2.4s] opacity-0 [animation-fill-mode:forwards] px-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 relative overflow-hidden group">
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="truncate">Book Your Ride Now</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="ml-2">Call (972) 555-KAND</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-16 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;