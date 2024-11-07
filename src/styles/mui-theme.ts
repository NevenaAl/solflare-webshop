import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colors, typography } from './variables/variables';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: [
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      body1: {
        font: typography.typographyBody1,
        color: colors.primaryForegroundHoverColor,
      },
      body2: {
        font: typography.typographyBody2,
        color: colors.secondaryForegroundColor,
      },
      body3: {
        font: typography.typographyBody3,
        color: colors.secondaryForegroundColor,
      },
      h1: {
        font: typography.typographyHeading,
        color: colors.primaryForegroundHoverColor,
      },
      subtitle1: {
        font: typography.typographySubheading,
        color: colors.primaryForegroundHoverColor,
      },
      button: {
        font: typography.typographyButton,
        color: colors.primaryForegroundHoverColor,
      },
    },
    palette: {
      action: {
        hover: colors.primaryBackgroundHoverColor,
      },
      secondary: {
        main: colors.secondaryBackgroundColor,
        contrastText: colors.secondaryForegroundColor,
      },
      primary: {
        main: colors.primaryBackgroundColor,
        contrastText: colors.primaryForegroundColor,
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: '2px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            font: typography.typographyButton,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: { textDecoration: 'none' },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: { margin: 'unset' },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: 'inherit',
          },
        },
      },
    },
  }),
);

export default theme;
