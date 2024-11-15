import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { getCovertedProductTableData } from '../../utils/product-util';
import { ProductDataValue } from '../../types/product';

interface ProductDataTableProps {
  data: Record<string, ProductDataValue>;
}

const ProductDataTable: React.FC<ProductDataTableProps> = ({ data }) => {
  const convertedTableData = getCovertedProductTableData(data);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="specifications table">
        <TableBody>
          {convertedTableData.map((info, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {info.label}
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" fontWeight={500}>
                  {info.value}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductDataTable;
