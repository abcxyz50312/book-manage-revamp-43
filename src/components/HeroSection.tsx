import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Container,
  Grid,
  styled,
  useTheme
} from "@mui/material";
import { 
  ArrowForward, 
  CheckCircle, 
  People, 
  CalendarMonth, 
  CreditCard, 
  TrendingUp 
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const BackgroundImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))',
  zIndex: 1,
});

const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
  transition: 'all 0.5s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const FloatingIcon = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  background: theme.palette.gradient.primary,
  borderRadius: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: 'float 3s ease-in-out infinite',
}));

const GradientText = styled(Typography)({
  background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'float 3s ease-in-out infinite',
});

const ScrollIndicator = styled(Box)({
  position: 'absolute',
  bottom: 32,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 10,
  '& .scroll-mouse': {
    width: 24,
    height: 40,
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    '& .scroll-wheel': {
      width: 4,
      height: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 2,
      marginTop: 8,
    },
  },
});

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: CalendarMonth,
      title: 'Smart Scheduling',
      description: 'Automated booking system with real-time availability and conflict prevention.',
      delay: '0s',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment gateway with automated billing and subscription management.',
      delay: '0.2s',
    },
    {
      icon: People,
      title: 'Member Management',
      description: 'Complete member profiles with attendance tracking and personalized experiences.',
      delay: '0.4s',
    },
  ];

  return (
    <HeroContainer>
      {/* Background Image with Parallax */}
      <BackgroundImage
        src={heroImage}
        alt="Professional Studio"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <Overlay />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ color: 'white', '& > *': { mb: 4 } }} className="animate-fade-in-left">
              <Box>
                <Typography variant="h1" component="h1" sx={{ mb: 3, lineHeight: 1.2 }}>
                  Transform Your{' '}
                  <GradientText variant="h1" sx={{ display: 'block' }}>
                    Studio Management
                  </GradientText>
                </Typography>
                <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}>
                  Streamline operations, boost member engagement, and grow your business with our comprehensive studio management platform.
                </Typography>
              </Box>

              {/* Key Benefits */}
              <Box sx={{ '& > *': { mb: 2 } }}>
                {[
                  'Automated scheduling and booking system',
                  'Seamless payment processing and billing',
                  'Comprehensive member management tools',
                ].map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircle sx={{ color: '#4ade80', fontSize: 24 }} />
                    <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, pt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    '& .MuiSvgIcon-root': {
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover .MuiSvgIcon-root': {
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  Get Started Today
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1.125rem',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: 'black',
                      borderColor: 'white',
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Box>

              {/* Trust Indicators */}
              <Box sx={{ pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
                  Trusted by 500+ studios worldwide
                </Typography>
                <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {[
                    { icon: People, text: '10,000+ Members' },
                    { icon: CalendarMonth, text: '50,000+ Classes' },
                    { icon: TrendingUp, text: '98% Satisfaction' },
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <item.icon sx={{ fontSize: 20 }} />
                      <Typography variant="body2">{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Content - Feature Cards */}
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box sx={{ '& > *': { mb: 3 } }} className="animate-fade-in-right">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  sx={{
                    animationDelay: feature.delay,
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <FloatingIcon sx={{ animationDelay: `${index * 0.5}s` }}>
                        <feature.icon sx={{ color: 'white', fontSize: 24 }} />
                      </FloatingIcon>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator className="animate-bounce">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </ScrollIndicator>
    </HeroContainer>
  );
}