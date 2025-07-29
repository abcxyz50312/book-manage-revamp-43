import { Box } from "@mui/material";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <Box component="main">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </Box>
      <Footer />
      <FloatingActionButton />
    </Box>
  );
};

export default Index;