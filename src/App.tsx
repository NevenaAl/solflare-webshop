import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';

import theme from './styles/mui-theme';
import './i18n';
import './App.css';
import { router } from './router';
import { queryClient } from './api';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

//TODO
//add toast
//add currency component
//replace any types
//replace div with box
