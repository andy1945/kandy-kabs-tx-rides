import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility, Heart, Calendar, Building, Users, ShoppingBag, Plane } from "lucide-react";

const services = [
  {
    icon: Accessibility,
    title: "Wheelchair-Accessible Transportation",
    description: "State-certified vehicles with ramps and securement systems. Assistance from door to door, including help getting to and from the vehicle and into appointments."
  },
  {
    icon: Heart,
    title: "Cancer / Chemo Transportation",
    description: "Calm, private rides timed around chemo schedules. Drivers understand appointment confidentiality and can wait or return for the patient when needed."
  },
  {
    icon: Calendar,
    title: "Dialysis Transportation",
    description: "Reliable round-trip scheduling for recurring dialysis sessions. Same-day backups available when possible to keep treatments on track."
  },
  {
    icon: Building,
    title: "Nursing Home & Assisted Living Transfers",
    description: "Coordinated transfers to/from nursing homes, rehab, and assisted living facilities — including move-in/out support when requested."
  },
  {
    icon: Users,
    title: "Hospital Visit & Outpatient Appointments",
    description: "Drop-offs and pick-ups for outpatient procedures, doctor visits, and follow-ups. We monitor flight ETAs and keep family members updated."
  },
  {
    icon: ShoppingBag,
    title: "Senior Errands & Companion Rides",
    description: "Grocery runs, pharmacy pick-ups, social outings, and companionship on the ride — drivers can assist with light bags and mobility support."
  },
  {
    icon: Plane,
    title: "Event & Special-Needs Trips",
    description: "Airport transfers, church, family events, and community activities — arranged with any special accommodations you need."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Safe, reliable, and caring non-medical transportation for your family in Princeton and the surrounding area.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;