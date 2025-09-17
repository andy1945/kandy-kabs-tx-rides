import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us Now",
    content: "(972) 555-KAND",
    description: "Available 24/7 for emergency rides"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@kandykabs.com",
    description: "We'll respond within 2 hours"
  },
  {
    icon: MapPin,
    title: "Service Area",
    content: "Princeton, TX & Surrounding",
    description: "McKinney, Anna, Farmersville, and beyond"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "24/7 Service Available",
    description: "Book ahead for best availability"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today to schedule your safe, reliable transportation. 
            We're here to help your family get where they need to go.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-lg font-medium text-primary mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="hero" size="lg" className="flex-1">
                <Phone className="h-5 w-5" />
                Call Now for Immediate Booking
              </Button>
              <Button variant="cta" size="lg" className="flex-1">
                <Calendar className="h-5 w-5" />
                Schedule Online
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card animate-slide-up" style={{animationDelay: "200ms"}}>
            <CardHeader>
              <CardTitle className="text-2xl">Request a Quote</CardTitle>
              <CardDescription>
                Tell us about your transportation needs and we'll get back to you with a personalized quote.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" placeholder="(972) 555-0123" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <Input id="pickup" placeholder="123 Main St, Princeton, TX" />
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" placeholder="Medical Center, Hospital, etc." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="needs">Special Needs or Requirements</Label>
                <Textarea 
                  id="needs" 
                  placeholder="Wheelchair accessibility, recurring appointments, special assistance needed, etc."
                  rows={3}
                />
              </div>
              
              <Button variant="success" className="w-full" size="lg">
                Send Quote Request
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Required fields. We'll contact you within 2 hours during business hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;