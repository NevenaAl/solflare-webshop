import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

import style from './Layout.module.scss';
import Header from '../Header';

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        >
          eeeeee
        </Drawer>
      </main>
    </div>
  );
};

export default Layout;
