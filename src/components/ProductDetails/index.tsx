import ListItem from '@mui/material/ListItem';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircle from '@mui/icons-material/CheckCircleOutline';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';

import { CartContext } from '../../context/CartProvider';
import { spacings } from '../../styles/variables/variables';
import Price from '../ui/Price';
import { ToastContext } from '../../context/ToastProvider';
import { Product } from '../../types/product';
import ProductDataTable from '../ProductDataTable';
import noImage from '../../assets/images/noImage.jpg';
import ProductDetailsSkeleton from '../ProductDetailsSkeleton';
import Accordion from '../ui/Accordion';

interface ProductDetailsProps {
  isLoading: boolean;
  product: Product | undefined;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  isLoading,
}) => {
  const { addToCart } = useContext(CartContext);
  const { t } = useTranslation();
  const { addToast } = useContext(ToastContext);

  const handleAddToCart = () => {
    addToCart(product!);
    addToast({ message: t('productAddedToCart', { product: product!.name }) });
  };

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return (
      <Typography variant="subtitle1">{t('productNotAvailable')}</Typography>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      gap={spacings.spacingLarge}
    >
      <Box
        gap={spacings.spacingMedium}
        display="flex"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          component="img"
          alt={t('productImage')}
          src={noImage}
          width={300}
          height={300}
        />
        <Box
          display="flex"
          flexDirection="column"
          gap={spacings.spacingMedium}
          flex="1"
        >
          <Typography variant="h4">{product.name}</Typography>
          <Price typographyVariant={'h5'} value={product.price} />
          <Typography flex="1" variant="body2">
            {product.description}
          </Typography>
          <Box alignSelf="end">
            <Button onClick={handleAddToCart}>{t('addToCart')}</Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Accordion isExpandedByDefault title={t('features')}>
          <List>
            {product.features.map((feature) => (
              <ListItem key={feature}>
                <ListItemAvatar>
                  <CheckCircle color="success" />
                </ListItemAvatar>
                <Typography>{feature}</Typography>
              </ListItem>
            ))}
          </List>
        </Accordion>
        <Accordion title={t('specifications')}>
          <ProductDataTable data={product.specifications} />
        </Accordion>
        <Accordion title={t('additionalInformation')}>
          <ProductDataTable data={product.additionalInformation} />
        </Accordion>
      </Box>
    </Box>
  );
};

export default ProductDetails;
