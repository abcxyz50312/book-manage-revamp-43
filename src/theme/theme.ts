import { createTheme } from '@mui/material/styles';

export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#FAFAFA",
    50: "#F0F0F0",
    100: "#D9D9D9",
    200: "#BFBFBF",
    300: "#A6A6A6",
    400: "#8C8C8C",
    500: "#737373",
    600: "#595959",
    700: "#404040",
    800: "#262626",
    900: "#0D0D0D",
    1000: "#000000",
  },
  primary: {
    25: "#F5F9FF",
    50: "#EBF2FF",
    100: "#D6E4FF",
    200: "#ADC8FF",
    300: "#84A9FF",
    400: "#6690FF",
    500: "#3366FF",
    600: "#254EDA",
    700: "#1939B7",
    800: "#102693",
    900: "#08154D",
  },
  secondary: {
    25: "#FFFDE0",
    50: "#FFFAC2",
    100: "#FFF7A4",
    200: "#FFF285",
    300: "#FFED66",
    400: "#FFE747",
    500: "#FFE229",
    600: "#CCB61E",
    700: "#998914",
    800: "#665C0A",
    900: "#332E02",
  },
};

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
    neutral: {
      dark: string;
      main: string;
      medium?: string;
      mediumMain?: string;
      light: string;
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
    neutral?: {
      dark?: string;
      main?: string;
      medium?: string;
      mediumMain?: string;
      light?: string;
    };
  }
}

export const themeSettings = (mode: 'light' | 'dark') => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          primary: {
            dark: colorTokens.primary[200],
            main: colorTokens.primary[500],
            light: colorTokens.primary[800],
            contrastText: '#ffffff',
          },
          secondary: {
            dark: colorTokens.secondary[100],
            main: colorTokens.secondary[400],
            light: colorTokens.secondary[700],
            contrastText: colorTokens.grey[900],
          },
          neutral: {
            dark: colorTokens.grey[100],
            main: colorTokens.grey[200],
            mediumMain: colorTokens.grey[300],
            medium: colorTokens.grey[400],
            light: colorTokens.grey[700],
          },
          background: {
            default: colorTokens.grey[900],
            paper: colorTokens.grey[800],
          },
          text: {
            primary: colorTokens.grey[100],
            secondary: colorTokens.grey[300],
          },
        }
        : {
          primary: {
            dark: colorTokens.primary[800],
            main: colorTokens.primary[700],
            light: colorTokens.primary[200],
            contrastText: '#ffffff',
          },
          secondary: {
            dark: colorTokens.secondary[700],
            main: colorTokens.secondary[400],
            light: colorTokens.secondary[100],
            contrastText: colorTokens.grey[900],
          },
          neutral: {
            dark: colorTokens.grey[1000],
            main: colorTokens.grey[700],
            medium: colorTokens.grey[500],
            light: colorTokens.grey[0],
          },
          background: {
            default: colorTokens.grey[0],
            paper: colorTokens.grey[10],
          },
          text: {
            primary: colorTokens.grey[900],
            secondary: colorTokens.grey[600],
          },
        }),
      success: {
        main: '#10B981',
        contrastText: '#ffffff',
      },
      warning: {
        main: '#F59E0B',
        contrastText: '#ffffff',
      },
      error: {
        main: '#EF4444',
        contrastText: '#ffffff',
      },
      gradient: {
        primary: `linear-gradient(135deg, ${colorTokens.primary[500]}, ${colorTokens.primary[700]})`,
        hero: `linear-gradient(135deg, ${colorTokens.primary[500]}, ${colorTokens.secondary[500]})`,
        features: `linear-gradient(135deg, ${colorTokens.primary[25]}, ${colorTokens.secondary[25]})`,
        testimonials: `linear-gradient(135deg, ${colorTokens.primary[50]}, ${colorTokens.grey[10]})`,
        pricing: `linear-gradient(135deg, ${colorTokens.secondary[25]}, ${colorTokens.primary[25]})`,
        footer: `linear-gradient(135deg, ${colorTokens.grey[900]}, ${colorTokens.grey[800]})`,
        card: `linear-gradient(180deg, ${colorTokens.grey[0]}, ${colorTokens.grey[10]})`,
        cardHover: `linear-gradient(180deg, ${colorTokens.primary[25]}, ${colorTokens.secondary[25]})`,
      },
      shadow: {
        elegant: `0 10px 30px -5px ${colorTokens.primary[500]}15`,
        card: `0 4px 6px -1px ${colorTokens.grey[400]}1A`,
        glow: `0 0 40px ${colorTokens.primary[500]}20`,
      },
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 16,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 48,
        fontWeight: 700,
        lineHeight: 1.2,
        '@media (min-width:1024px)': {
          fontSize: 56,
        },
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 1.3,
        '@media (min-width:1024px)': {
          fontSize: 48,
        },
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: 16,
        lineHeight: 1.6,
      },
      body2: {
        fontSize: 14,
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
            textTransform: 'none' as const,
            fontWeight: 500,
            borderRadius: '0.75rem',
            padding: '12px 24px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 10px 30px -5px ${colorTokens.primary[500]}15`,
            },
          },
          contained: {
            background: `linear-gradient(135deg, ${colorTokens.primary[500]}, ${colorTokens.primary[700]})`,
            color: '#ffffff',
            boxShadow: `0 4px 6px -1px ${colorTokens.grey[400]}1A`,
            '&:hover': {
              background: `linear-gradient(135deg, ${colorTokens.primary[700]}, ${colorTokens.primary[500]})`,
              transform: 'translateY(-2px) scale(1.05)',
              boxShadow: `0 0 40px ${colorTokens.primary[500]}20`,
            },
          },
          outlined: {
            borderWidth: '2px',
            borderColor: colorTokens.primary[500],
            color: colorTokens.primary[500],
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: colorTokens.primary[500],
              color: '#ffffff',
              transform: 'translateY(-2px)',
              boxShadow: `0 4px 6px -1px ${colorTokens.grey[400]}1A`,
            },
          },
          text: {
            color: colorTokens.primary[500],
            '&:hover': {
              backgroundColor: colorTokens.primary[25],
              color: colorTokens.primary[700],
              transform: 'translateY(-1px)',
              boxShadow: `0 2px 4px -1px ${colorTokens.grey[400]}0D`,
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
            boxShadow: `0 4px 6px -1px ${colorTokens.grey[400]}1A`,
            border: 'none',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.5s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: `0 0 40px ${colorTokens.primary[500]}20`,
              background: 'rgba(255, 255, 255, 0.9)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '1rem',
            boxShadow: `0 4px 6px -1px ${colorTokens.grey[400]}1A`,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '0.75rem',
              '& fieldset': {
                borderColor: colorTokens.grey[200],
              },
              '&:hover fieldset': {
                borderColor: colorTokens.primary[500],
              },
              '&.Mui-focused fieldset': {
                borderColor: colorTokens.primary[500],
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
            background: `linear-gradient(135deg, ${colorTokens.primary[500]}, ${colorTokens.primary[700]})`,
            color: '#ffffff',
          },
          outlined: {
            borderColor: colorTokens.primary[500],
            color: colorTokens.primary[500],
          },
        },
      },
    },
  };
};

const theme = createTheme(themeSettings('light'));

export default theme;