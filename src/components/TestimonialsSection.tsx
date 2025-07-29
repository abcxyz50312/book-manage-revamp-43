import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimations";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Owner, Rhythmix International",
      content: "Book & Manage has completely transformed how we operate. The automated scheduling saves us hours every week, and our members love the easy booking system.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Director, Studio7 GHY",
      content: "The payment processing is seamless and the financial reporting gives us insights we never had before. Our revenue has increased by 30% since implementation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      role: "Manager, Urban Beats",
      content: "Customer support is exceptional and the platform is incredibly user-friendly. Both our staff and members adapted to it immediately.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Owner, Gymnastics Terminal",
      content: "The member management features help us provide personalized experiences. Our retention rate has improved significantly since we started using Book & Manage.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "500+", label: "Studios Trust Us" },
    { number: "10K+", label: "Active Members" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-testimonials relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            <span>Trusted by Studios</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what studio owners are saying about their experience with Book & Manage.
          </p>
        </ScrollAnimation>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-glow hover-lift">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <Card className="p-8 border-0 shadow-card hover:shadow-glow transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-1 hover-lift h-full">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by leading studios worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold">Rhythmix International</div>
            <div className="text-lg font-semibold">Studio7 GHY</div>
            <div className="text-lg font-semibold">Urban Beats</div>
            <div className="text-lg font-semibold">Gymnastics Terminal</div>
          </div>
        </div>
      </div>
    </section>
  );
}