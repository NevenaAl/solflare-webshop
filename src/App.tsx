import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';

import theme from './styles/mui-theme';
import './i18n';
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
//comp naming
//read me
//proveri gde provideri da idu
//razdvojiti typography, ne radi dobro
