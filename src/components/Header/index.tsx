import style from './Header.module.scss';
import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className={style.header}>
      <nav>
        <div className={style.navLinks}>
          <Link href="/" aria-label="Home">
            <img width={'150px'} src={logo}></img>
          </Link>
          <IconButton color="primary" aria-label="Shopping cart">
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </nav>
    </header>
  );
}

export default Header;
