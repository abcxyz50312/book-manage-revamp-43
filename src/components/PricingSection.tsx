import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimations";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small studios just getting started",
      icon: Zap,
      features: [
        "Up to 100 members",
        "Basic scheduling",
        "Payment processing",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      limitations: [
        "Limited integrations",
        "Standard support"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing studios with advanced needs",
      icon: Crown,
      features: [
        "Up to 500 members",
        "Advanced scheduling",
        "Payment processing",
        "Priority support",
        "Mobile app access",
        "Advanced reporting",
        "Marketing tools",
        "Member app",
        "API access",
        "Custom branding"
      ],
      limitations: [],
      buttonText: "Get Started",
      buttonVariant: "premium" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large studios and chains with complex requirements",
      icon: Building2,
      features: [
        "Unlimited members",
        "Enterprise scheduling",
        "Payment processing",
        "24/7 dedicated support",
        "Mobile app access",
        "Custom reporting",
        "Advanced marketing",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "Custom training",
        "SLA guarantee"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-pricing relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-400/20 to-purple-400/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Crown className="h-4 w-4" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose the Perfect Plan for Your Studio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <ScrollAnimation key={index} delay={index * 200}>
              <Card 
                className={`relative p-8 border-2 transition-all duration-500 hover:shadow-glow hover:-translate-y-3 bg-white/80 backdrop-blur-sm h-full ${
                  plan.popular 
                    ? 'border-primary shadow-glow scale-105 bg-gradient-card-hover' 
                    : 'border-border/50 hover:border-primary/50 hover:bg-white/90'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 shadow-glow animate-pulse">
                    ⭐ Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-xl transition-transform duration-300 hover:scale-110 animate-float ${plan.popular ? 'bg-gradient-primary shadow-glow' : 'bg-gradient-to-br from-muted to-muted/50'}`} style={{ animationDelay: `${index * 0.5}s` }}>
                    <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className="text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button 
                    variant={plan.buttonVariant} 
                    size="lg" 
                    className="w-full transition-all duration-300 hover:scale-105"
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 transition-all duration-300 hover:translate-x-1">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Is there a free trial?</h4>
              <p className="text-muted-foreground">
                Yes! We offer a 14-day free trial with full access to all features. No credit card required.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Can I change plans anytime?</h4>
              <p className="text-muted-foreground">
                Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">What payment methods do you accept?</h4>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Is there a setup fee?</h4>
              <p className="text-muted-foreground">
                No setup fees for Starter and Professional plans. Enterprise plans include complimentary setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}