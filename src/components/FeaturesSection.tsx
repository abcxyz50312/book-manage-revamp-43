import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  CreditCard, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Shield, 
  BarChart3, 
  Clock,
  ArrowRight
} from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimations";

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intuitive calendar system to manage classes, appointments, and events. Allow clients to book online 24/7 and reduce scheduling conflicts.",
      benefits: ["Real-time availability", "Conflict prevention", "Automated reminders", "Mobile booking"]
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Process payments, manage subscriptions, and automate billing. Keep track of revenue with detailed financial reports.",
      benefits: ["Secure payment gateway", "Subscription management", "Automated invoicing", "Financial analytics"]
    },
    {
      icon: Users,
      title: "Member Management",
      description: "Track memberships, attendance, progress, and preferences. Build stronger relationships with personalized member experiences.",
      benefits: ["Complete member profiles", "Attendance tracking", "Progress monitoring", "Personalized communication"]
    },
    {
      icon: TrendingUp,
      title: "Studio Growth",
      description: "Marketing tools, analytics, and insights to help your studio reach more clients and increase retention rates.",
      benefits: ["Marketing automation", "Retention analytics", "Performance insights", "Growth strategies"]
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Centralized messaging system to keep members informed about classes, updates, and special offers.",
      benefits: ["Automated notifications", "Group messaging", "Email campaigns", "SMS integration"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance and data protection to keep your business and members safe.",
      benefits: ["Data encryption", "GDPR compliance", "Secure access", "Privacy protection"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-features relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="h-4 w-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Manage Your Studio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive studio management platform helps you streamline operations, 
            enhance client experience, and focus on growing your business.
          </p>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 200}>
              <Card className="group hover:shadow-glow hover:bg-gradient-card-hover transition-all duration-500 hover:-translate-y-2 border-0 shadow-card bg-white/80 backdrop-blur-sm h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-gradient-primary rounded-xl group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation delay={600} className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-primary text-white border-0 shadow-glow hover-lift transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              <div className="text-left lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Ready to Transform Your Studio?
                </h3>
                <p className="text-white/90 text-lg">
                  Join thousands of studios already using our platform to grow their business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-primary border-white hover:bg-white/90 group transform hover:scale-105 transition-all duration-300"
                >
                  Learn How We Can Help
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}