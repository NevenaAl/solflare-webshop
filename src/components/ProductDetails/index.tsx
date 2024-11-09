import ListItem from '@mui/material/ListItem';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircle from '@mui/icons-material/CheckCircleOutline';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

import { CartContext } from '../../context/CartProvider';
import { spacings } from '../../styles/variables/variables';
import Price from '../ui/Price';
import { ToastContext } from '../../context/ToastProvider';
import { Product } from '../../types/product';
import ProductDataTable from '../ProductDataTable';
import noImage from '../../assets/images/noImage.jpg';

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
    return (
      <Box
        gap={spacings.spacingLarge}
        display="flex"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Skeleton variant="rounded" height={300} width={300} />
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          gap={spacings.spacingMedium}
        >
          <Skeleton variant="rounded" height={50} width="100%"></Skeleton>
          <Skeleton variant="rounded" height={235} width="100%"></Skeleton>
        </Box>
      </Box>
    );
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
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="features-content"
          >
            <Typography fontWeight="500">{t('features')}</Typography>
          </AccordionSummary>
          <AccordionDetails id="features-content">
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
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="specifications-content"
          >
            <Typography fontWeight="500">{t('specifications')}</Typography>
          </AccordionSummary>
          <AccordionDetails id="specifications-content">
            <ProductDataTable data={product.specifications} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="additional-information-content"
          >
            <Typography fontWeight="500">
              {t('additionalInformation')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails id="additional-information-content">
            <ProductDataTable data={product.additionalInformation} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default ProductDetails;
