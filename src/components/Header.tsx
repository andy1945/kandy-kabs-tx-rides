import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "pricing", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">Kandy Kabs</div>
          <div className="hidden sm:block text-sm text-muted-foreground">Princeton, TX</div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#services" 
            className={`text-sm font-medium transition-colors ${
              activeSection === "services" 
                ? "text-primary border-b-2 border-primary" 
                : "hover:text-primary"
            }`}
          >
            Services
          </a>
          <a 
            href="#pricing" 
            className={`text-sm font-medium transition-colors ${
              activeSection === "pricing" 
                ? "text-primary border-b-2 border-primary" 
                : "hover:text-primary"
            }`}
          >
            Pricing
          </a>
          <a 
            href="#about" 
            className={`text-sm font-medium transition-colors ${
              activeSection === "about" 
                ? "text-primary border-b-2 border-primary" 
                : "hover:text-primary"
            }`}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`text-sm font-medium transition-colors ${
              activeSection === "contact" 
                ? "text-primary border-b-2 border-primary" 
                : "hover:text-primary"
            }`}
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button variant="cta" size="sm">
            <Calendar className="h-4 w-4" />
            Book Ride
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;