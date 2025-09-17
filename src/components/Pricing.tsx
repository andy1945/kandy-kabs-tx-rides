import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, CreditCard, Star } from "lucide-react";

const pricingTiers = [
  {
    title: "Within Princeton",
    description: "Most neighborhoods in Princeton city limits",
    icon: MapPin,
    pricing: [
      { type: "Standard car (one-way)", price: "$20 base + $1.50/mile" },
      { type: "Wheelchair accessible (one-way)", price: "$35 base + $2.25/mile" },
      { type: "Round-trip same day", price: "Base × 1.8 (discounted return)" }
    ],
    badge: "Most Popular"
  },
  {
    title: "Nearby Towns",
    description: "McKinney, Anna, Farmersville",
    icon: MapPin,
    pricing: [
      { type: "Standard car (one-way)", price: "$35 base + $1.85/mile" },
      { type: "Wheelchair accessible (one-way)", price: "$50 base + $2.50/mile" },
      { type: "Hourly option (errands)", price: "$45/hour (2-hour min)" }
    ]
  },
  {
    title: "Longer Trips",
    description: "Denton / Frisco / Dallas",
    icon: MapPin,
    pricing: [
      { type: "Quote per trip", price: "Typical minimum $85" },
      { type: "Wheelchair vehicles", price: "Slightly higher rates" },
      { type: "Call for estimate", price: "Custom pricing" }
    ]
  }
];

const membershipOptions = [
  {
    title: "Weekly Dialysis Membership",
    description: "Same route / repeating schedule",
    discount: "10% discount",
    icon: Clock
  },
  {
    title: "Monthly Concierge Pass",
    description: "4 round-trips + priority booking",
    price: "$299",
    icon: Star
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, straightforward pricing for Princeton, TX area transportation. All drivers are licensed and insured.
          </p>
        </div>
        
        {/* Main Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="relative shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  {tier.badge}
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <tier.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{tier.title}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {tier.pricing.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{item.type}</span>
                    <span className="font-semibold text-foreground">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Membership Options */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Membership & Recurring Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {membershipOptions.map((option, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success-light rounded-lg flex items-center justify-center">
                      <option.icon className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-success">
                    {option.discount || option.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Payment Methods */}
        <Card className="max-w-4xl mx-auto shadow-card">
          <CardHeader className="text-center">
            <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-xl">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Card (Visa/Mastercard/Amex), Apple Pay / Google Pay, Venmo, Cash, or invoice for approved business accounts. 
              Payment required at time of service or pre-authorized for scheduled recurring rides.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> We do not directly bill medical insurance. If you need help with paperwork for reimbursement, 
              we can provide receipts and trip logs.
            </p>
          </CardContent>
        </Card>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" className="text-lg px-8 py-6">
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;