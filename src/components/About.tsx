import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Heart, CheckCircle, MapPin } from "lucide-react";
import caringServiceImage from "@/assets/caring-service.jpg";
import vehicleInteriorImage from "@/assets/vehicle-interior.jpg";

const trustIndicators = [
  {
    icon: Shield,
    title: "Safety & Training",
    points: [
      "All drivers background-checked and drug-screened",
      "Ongoing sensitivity and mobility assistance training", 
      "Vehicles inspected daily with tested wheelchair equipment",
      "HIPAA-aware for medical appointments — we respect privacy"
    ]
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    points: [
      "Drivers treat your loved ones like family",
      "Door-through-door service available",
      "Patient with seniors and mobility challenges",
      "Understanding of medical appointment needs"
    ]
  },
  {
    icon: Users,
    title: "Family-Centered Service",
    points: [
      "Real-time tracking for family peace of mind",
      "Pickup and drop-off notifications",
      "Family member can ride along (space permitting)",
      "Post-ride check-in calls available"
    ]
  }
];

const conciergeExtras = [
  "Door-through-door service (driver escorts inside building)",
  "Medication reminder at pick-up/drop-off (non-medical)",
  "Grocery or pharmacy pickup and porch drop",
  "Appointment reminders and scheduling coordination",
  "Short-term mobility equipment loan (limited availability)",
  "Post-ride check-in call or text to family member",
  "Light household assistance (carrying bags, bringing items to door)"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Us Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Kandy Kabs
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kandy Kabs began in Princeton to serve families who need dependable, caring transportation 
              without the stress. We're neighbors — we know local clinics, hospitals, and nursing homes — 
              and we value the trust families place in us.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our locally owned Princeton, TX transportation service is built for families, seniors, 
              and anyone who needs a comfortable, dependable ride. Our drivers are trained, 
              background-checked, and focused on punctuality, safety, and compassion.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Proudly serving Princeton and surrounding areas</span>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src={caringServiceImage} 
              alt="Caring transportation service helping seniors"
              className="rounded-lg shadow-card w-full h-auto"
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Why Families Trust Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                    <indicator.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{indicator.title}</h4>
                  <ul className="space-y-2">
                    {indicator.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Concierge Extras */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-scale-in">
            <img 
              src={vehicleInteriorImage} 
              alt="Professional wheelchair accessible vehicle interior"
              className="rounded-lg shadow-card w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Concierge Extras
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Small Add-ons That Make Life Easier
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              These extras are designed to make life easier for families and caregivers:
            </p>
            <div className="grid grid-cols-1 gap-3">
              {conciergeExtras.map((extra, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{extra}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;