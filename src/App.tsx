import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';

import theme from './styles/mui-theme';
import './i18n';
import { router } from './router';
import { queryClient } from './api/query-client';
import CartProvider from './context/CartProvider';
import ToastProvider from './context/ToastProvider';

const App = () => {
  return (
    <CartProvider>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </ToastProvider>
    </CartProvider>
  );
};

export default App;
