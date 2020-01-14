import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f2f2f2',
      main: '#336699',
      dark: '#334d4d',
      contrastText: ' #ffffff',
    },
    secondary: {
      main: '#f44336',
      contrastText: ' #ffffff',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#4caf50',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;
