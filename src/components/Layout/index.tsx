import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import style from './Layout.module.scss';
import Header from '../Header';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Container className={style.container}>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

export default Layout;
