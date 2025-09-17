import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Navigation, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Call or Book Online",
    description: "Contact us at Kandykabs.com or call (972) 555-KAND to schedule your ride."
  },
  {
    icon: Calendar,
    step: "2", 
    title: "Share Your Details",
    description: "Tell us pickup address, destination, appointment time, and any mobility needs."
  },
  {
    icon: Navigation,
    step: "3",
    title: "Get Real-Time Tracking",
    description: "We confirm the driver and send you a tracking link with driver photo and vehicle details."
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Safe & Comfortable Ride",
    description: "Driver arrives, assists the rider, and completes the trip. Family receives pickup and drop-off notifications."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Booking Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent booking process with real-time tracking for peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader>
                <div className="relative mx-auto">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Connecting Line for Desktop */}
        <div className="hidden lg:block relative -mt-32 mb-16">
          <div className="absolute top-8 left-1/12 right-1/12 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;