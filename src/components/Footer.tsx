import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-footer text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src={logoImg} alt="Book & Manage" className="h-10 w-10" />
            <span className="text-xl font-bold text-white">Book & Manage</span>
          </div>
          <p className="text-white/80 leading-relaxed">
                The comprehensive studio management platform that helps you streamline operations, 
                enhance client experience, and grow your business.
              </p>
              <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10 text-white/70">
                  <Facebook className="h-5 w-5" />
                </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10 text-white/70">
                  <Twitter className="h-5 w-5" />
                </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10 text-white/70">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10 text-white/70">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-white/70 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Training Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="text-white/70">
                Get the latest updates, tips, and insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email"
                    type="email"
                    className="flex-1"
                  />
                  <Button variant="default" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-white/60">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-white/20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-sm text-white/70">hello@bookandmanage.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p className="text-sm text-white/70">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Office</p>
                <p className="text-sm text-white/70">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © {currentYear} Book & Manage. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}