import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useTheme,
  useMediaQuery,
  styled
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { useState, useEffect } from "react";
import logoImg from "@/assets/logo.png";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&.scrolled': {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  '&:hover': {
    color: theme.palette.text.primary,
    transform: 'scale(1.05)',
    backgroundColor: 'transparent',
  },
}));

const Logo = styled('img')({
  height: 40,
  width: 40,
});

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Features', id: 'features' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <StyledAppBar 
      position="fixed" 
      elevation={0}
      className={isScrolled ? 'scrolled' : ''}
      sx={{ color: 'text.primary' }}
    >
      <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', px: { xs: 2, sm: 3, lg: 4 } }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: isMobile ? 1 : 0 }}>
          <Logo src={logoImg} alt="Book & Manage" />
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'text.primary' }}>
            Book & Manage
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mx: 4, flexGrow: 1 }}>
            {menuItems.map((item) => (
              <NavButton
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </NavButton>
            ))}
          </Box>
        )}

        {/* Desktop CTA Buttons */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant="text" size="small">
              Log In
            </Button>
            <Button variant="contained" size="small">
              Get Started
            </Button>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            sx={{ color: 'text.primary' }}
          >
            {isMenuOpen ? <Close /> : <Menu />}
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="top"
        open={isMenuOpen && isMobile}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            mt: 8,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <List sx={{ p: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item.id}
              component="button"
              onClick={() => scrollToSection(item.id)}
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{ 
                  '& .MuiTypography-root': {
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary',
                    },
                  },
                }}
              />
            </ListItem>
          ))}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2, px: 2 }}>
            <Button variant="text" fullWidth>
              Log In
            </Button>
            <Button variant="contained" fullWidth>
              Get Started
            </Button>
          </Box>
        </List>
      </Drawer>
    </StyledAppBar>
  );
}