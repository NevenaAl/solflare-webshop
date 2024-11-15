import { AlertColor } from '@mui/material/Alert';

export type Toast = {
  id: number;
  timeout?: number;
  severity?: AlertColor;
  message: string;
};
