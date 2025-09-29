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
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 lg:px-6">
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <div className="text-xl sm:text-2xl font-bold text-primary truncate">Kandy Kabs</div>
          <div className="hidden sm:block text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Princeton, TX</div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <a 
            href="#services" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "services" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : ""
            }`}
          >
            Services
          </a>
          <a 
            href="#pricing" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "pricing" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : ""
            }`}
          >
            Pricing
          </a>
          <a 
            href="#about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "about" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : ""
            }`}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "contact" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : ""
            }`}
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Button variant="outline" size="sm" className="hidden md:flex text-xs sm:text-sm px-2 sm:px-3">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden lg:inline ml-1">Call Now</span>
          </Button>
          <Button variant="cta" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline ml-1">Book Ride</span>
            <span className="sm:hidden ml-1">Book</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;