import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import Box from '@mui/material/Box';

import logo from '../../../assets/images/logo.png';
import style from './Header.module.scss';
import { CartContext } from '../../../context/CartProvider';
import { spacings } from '../../../styles/variables/variables';

interface HeaderProps {
  onOpenDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDrawer }) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const { cartItems } = useContext(CartContext);

  const handleCartClick = (): void => {
    onOpenDrawer();
  };

  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <Tooltip title={t('home')}>
          <Link href="/" aria-label={t('home')}>
            <img width={'150px'} src={logo} alt={t('logo')}></img>
          </Link>
        </Tooltip>
        <Box display="flex" alignItems="center" gap={spacings.spacingXSmall}>
          <Tooltip title={t('shoppingCart')}>
            <IconButton
              onClick={handleCartClick}
              color="primary"
              aria-label={t('shoppingCart')}
            >
              <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
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
        </Box>
      </nav>
    </header>
  );
};

export default Header;