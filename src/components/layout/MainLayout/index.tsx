import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import { useContext, useState } from 'react';

import style from './MainLayout.module.scss';
import Header from '../Header';
import CartList from '../../CartList';
import { CartContext } from '../../../context/CartProvider';
import ToastsSnackbar from '../ToastsSnackbar';

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
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
      <ToastsSnackbar />
    </>
  );
};

export default Layout;
