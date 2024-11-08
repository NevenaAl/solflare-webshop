import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import { useContext, useState } from 'react';

import style from './Layout.module.scss';
import Header from '../Header';
import CartList from '../CartList';
import { CartContext } from '../../context/CartProvider';
import Toast from '../ui/Toast';
import useToast from '../../hooks/useToast';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import { spacings } from '../../styles/variables/variables';

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartItems, cartTotal } = useContext(CartContext);
  const { toasts } = useToast();

  return (
    <div>
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
      <main>
        <Container className={style.container}>
          <Outlet />
        </Container>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          className={style.drawer}
          variant="temporary"
        >
          <CartList items={cartItems} total={cartTotal}></CartList>
        </Drawer>
      </main>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Stack flexDirection="column" gap={spacings.spacingMedium}>
          {toasts.map((toast) => (
            <Toast
              id={toast.id}
              message={toast.message}
              severity={toast.severity}
            />
          ))}
        </Stack>
      </Snackbar>
    </div>
  );
};

export default Layout;
