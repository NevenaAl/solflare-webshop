import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import { spacings } from '../../styles/variables/variables';

const ProductDetailsSkeleton = () => {
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
};

export default ProductDetailsSkeleton;
