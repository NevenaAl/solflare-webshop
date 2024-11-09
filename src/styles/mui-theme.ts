import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colors, fontSizes } from './variables/variables';

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
        fontSize: fontSizes.fontMedium,
        color: colors.primaryForegroundColor,
      },
      body2: {
        fontSize: fontSizes.fontSmall,
        color: colors.secondaryForegroundColor,
      },
      body3: {
        fontSize: fontSizes.fontXSmall,
        color: colors.secondaryForegroundColor,
      },
      h1: {
        fontSize: fontSizes.fontXLarge,
        color: colors.primaryForegroundColor,
      },
      subtitle1: {
        fontSize: fontSizes.fontLarge,
        color: colors.primaryForegroundColor,
      },
      button: {
        fontSize: fontSizes.fontMedium,
        color: colors.primaryForegroundColor,
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
            fontSize: fontSizes.fontMedium,
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
            maxWidth: 'inherit',
          },
        },
      },
    },
  }),
);

export default theme;
