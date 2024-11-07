import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';

import theme from './styles/mui-theme';
import './i18n';
import './App.css';
import { router } from './router';
import { queryClient } from './api/query-client';

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
//add currency component
//replace div with box
//fix imports
//do i need utils
//toast hook
//should i move drawer
//comp naming
//read me
//add x to drawer
