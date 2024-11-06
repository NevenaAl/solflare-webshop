import '@mui/material/styles';
import '@mui/material/Typography';

//update interfaces to allow custom typography
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
