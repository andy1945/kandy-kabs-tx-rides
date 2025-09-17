import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">Kandy Kabs</div>
          <div className="hidden sm:block text-sm text-muted-foreground">Princeton, TX</div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
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