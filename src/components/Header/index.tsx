import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

import logo from '../../assets/images/logo.png';
import style from './Header.module.scss';

function Header() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <Tooltip title={t('home')}>
          <Link href="/" aria-label={t('home')}>
            <img width={'150px'} src={logo} alt={t('logo')}></img>
          </Link>
        </Tooltip>
        <div className={style.header__nav__right}>
          <Tooltip title={t('shoppingCart')}>
            <IconButton color="primary" aria-label={t('shoppingCart')}>
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
          <Select
            value={language}
            onChange={(event) => changeLanguage(event.target.value)}
            size={'small'}
            aria-label={t('selectLanguage')}
          >
            <MenuItem value={'en'}>en</MenuItem>
            <MenuItem value={'sr'}>sr</MenuItem>
          </Select>
        </div>
      </nav>
    </header>
  );
}

export default Header;
