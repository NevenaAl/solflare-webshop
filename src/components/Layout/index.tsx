import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import { useContext, useState } from 'react';

import style from './Layout.module.scss';
import Header from '../Header';
import CartList from '../CartList';
import { CartContext } from '../../context/CartProvider';

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartItems, cartTotal } = useContext(CartContext);

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
    </div>
  );
};

export default Layout;
