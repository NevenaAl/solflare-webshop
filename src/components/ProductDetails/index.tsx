import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import QuantityControl from '../ui/QuantityControl';
import { CartItem } from '../../types/cart';
import { CartContext } from '../../context/CartProvider';
import { spacings } from '../../styles/variables/variables';
import Price from '../ui/Price';
// import style from './CartListItem.module.scss';
import { ToastContext } from '../../context/ToastProvider';
import { Product } from '../../types/product';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';

interface ProductDetailsProps {
  isLoading: boolean;
  product: Product | undefined;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  isLoading,
}) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);
  const { t } = useTranslation();
  const { addToast } = useContext(ToastContext);

  if (product) {
    return (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        // gap={spacings.spacingLarge}
        flex={1}
      >
        <Price value={product.price} />
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography fontWeight="500">Features</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography fontWeight="500">Specifications</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography fontWeight="500">Additional Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }
  return <Typography>No product</Typography>;
};

export default ProductDetails;
