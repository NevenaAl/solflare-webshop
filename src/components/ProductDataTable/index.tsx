import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getCovertedProductTableData } from '../../utils/product-util';

interface ProductDataTableProps {
  data: Record<string, string | string[] | number>;
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
              <TableCell align="right">{info.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductDataTable;
