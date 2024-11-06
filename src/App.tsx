import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import { ThemeProvider } from '@mui/material';
import theme from './styles/mui-theme';
import './i18n';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
