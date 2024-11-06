import { createTheme } from '@mui/material/styles';
import { colors } from './variables/variables';

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          '&:hover': {
            background: 'transparent',
            color: colors.primaryBackgroundHoverColor,
          },
        },
      },
    },
  },
});

export default theme;
