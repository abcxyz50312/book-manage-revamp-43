import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      hero: string;
      features: string;
      testimonials: string;
      pricing: string;
      footer: string;
      card: string;
      cardHover: string;
    };
    shadow: {
      elegant: string;
      card: string;
      glow: string;
    };
  }

  interface PaletteOptions {
    gradient?: {
      primary?: string;
      hero?: string;
      features?: string;
      testimonials?: string;
      pricing?: string;
      footer?: string;
      card?: string;
      cardHover?: string;
    };
    shadow?: {
      elegant?: string;
      card?: string;
      glow?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(250, 84%, 54%)',
      dark: 'hsl(243, 75%, 46%)',
      light: 'hsl(256, 91%, 95%)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'hsl(220, 14.3%, 95.9%)',
      dark: 'hsl(220, 8.9%, 46.1%)',
      light: 'hsl(220, 14.3%, 97%)',
      contrastText: 'hsl(220, 8.9%, 46.1%)',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: 'hsl(222, 84%, 4.9%)',
      secondary: 'hsl(220, 8.9%, 46.1%)',
    },
    success: {
      main: 'hsl(142, 76%, 36%)',
      contrastText: '#ffffff',
    },
    warning: {
      main: 'hsl(32, 95%, 44%)',
      contrastText: '#ffffff',
    },
    error: {
      main: 'hsl(0, 84.2%, 60.2%)',
      contrastText: '#ffffff',
    },
    gradient: {
      primary: 'linear-gradient(135deg, hsl(250, 84%, 54%), hsl(243, 75%, 46%))',
      hero: 'linear-gradient(135deg, hsl(250, 84%, 54%), hsl(280, 84%, 64%))',
      features: 'linear-gradient(135deg, hsl(260, 95%, 95%), hsl(280, 95%, 98%))',
      testimonials: 'linear-gradient(135deg, hsl(250, 95%, 95%), hsl(220, 95%, 98%))',
      pricing: 'linear-gradient(135deg, hsl(240, 95%, 96%), hsl(260, 95%, 98%))',
      footer: 'linear-gradient(135deg, hsl(220, 50%, 10%), hsl(240, 50%, 15%))',
      card: 'linear-gradient(180deg, hsl(0, 0%, 100%), hsl(220, 14.3%, 97%))',
      cardHover: 'linear-gradient(180deg, hsl(250, 95%, 98%), hsl(260, 95%, 96%))',
    },
    shadow: {
      elegant: '0 10px 30px -5px hsl(250, 84%, 54%, 0.15)',
      card: '0 4px 6px -1px hsl(220, 22%, 30%, 0.1)',
      glow: '0 0 40px hsl(250, 84%, 54%, 0.2)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (min-width:1024px)': {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      '@media (min-width:1024px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '0.75rem',
          padding: '12px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px -5px hsl(250, 84%, 54%, 0.15)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, hsl(250, 84%, 54%), hsl(243, 75%, 46%))',
          color: '#ffffff',
          boxShadow: '0 4px 6px -1px hsl(220, 22%, 30%, 0.1)',
          '&:hover': {
            background: 'linear-gradient(135deg, hsl(243, 75%, 46%), hsl(250, 84%, 54%))',
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 0 40px hsl(250, 84%, 54%, 0.2)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: 'hsl(250, 84%, 54%)',
          color: 'hsl(250, 84%, 54%)',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'hsl(250, 84%, 54%)',
            color: '#ffffff',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 6px -1px hsl(220, 22%, 30%, 0.1)',
          },
        },
        text: {
          color: 'hsl(250, 84%, 54%)',
          '&:hover': {
            backgroundColor: 'hsl(220, 14.3%, 95.9%)',
            color: 'hsl(220, 8.9%, 46.1%)',
            transform: 'translateY(-1px)',
            boxShadow: '0 2px 4px -1px hsl(220, 22%, 30%, 0.05)',
          },
        },
        sizeLarge: {
          padding: '16px 32px',
          fontSize: '1.125rem',
          fontWeight: 600,
        },
        sizeSmall: {
          padding: '8px 16px',
          fontSize: '0.875rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 4px 6px -1px hsl(220, 22%, 30%, 0.1)',
          border: 'none',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.5s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 0 40px hsl(250, 84%, 54%, 0.2)',
            background: 'rgba(255, 255, 255, 0.9)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 4px 6px -1px hsl(220, 22%, 30%, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.75rem',
            '& fieldset': {
              borderColor: 'hsl(220, 13%, 91%)',
            },
            '&:hover fieldset': {
              borderColor: 'hsl(250, 84%, 54%)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'hsl(250, 84%, 54%)',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          fontWeight: 500,
        },
        filled: {
          background: 'linear-gradient(135deg, hsl(250, 84%, 54%), hsl(243, 75%, 46%))',
          color: '#ffffff',
        },
        outlined: {
          borderColor: 'hsl(250, 84%, 54%)',
          color: 'hsl(250, 84%, 54%)',
        },
      },
    },
  },
});

export default theme;