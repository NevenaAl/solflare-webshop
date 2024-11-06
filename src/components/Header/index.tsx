import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
      <nav>
        <div className={style.navLinks}>
          <Tooltip title={t('home')}>
            <Link href="/" aria-label={t('home')}>
              <img width={'150px'} src={logo} alt={t('logo')}></img>
            </Link>
          </Tooltip>

          <div className={style.right}>
            <Tooltip title={t('shoppingCart')}>
              <IconButton color="primary" aria-label={t('shoppingCart')}>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={t('selectLanguage')}>
              <Select
                value={language}
                onChange={(event) => changeLanguage(event.target.value)}
                size={'small'}
                aria-label={t('selectLanguage')}
              >
                <MenuItem value={'en'}>en</MenuItem>
                <MenuItem value={'sr'}>sr</MenuItem>
              </Select>
            </Tooltip>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
