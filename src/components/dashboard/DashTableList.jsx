import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Tooltip} from '@mui/material';
// import Paper from '@mui/material/Paper';

function DashTableList({columns, rows, toolTipTitle}) {
  return (
    <TableContainer
      // component={Paper}
      sx={{maxHeight: '100%'}}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column}
                align="center"
                sx={{
                  color: 'rgb(75 85 99)',
                  fontSize: '.98rem',
                }}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <Tooltip key={idx} title={toolTipTitle}>
              <TableRow
                key={idx + 1}
                className="list-hover"
                sx={{
                  '&:last-child td, &:last-child th': {border: 0, pb: 3},
                }}
              >
                {Object.values(row).map((item) => (
                  <TableCell key={item} align="center">
                    {item}
                  </TableCell>
                ))}
                {/* <TableCell align="center">{row.roomNumber}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
            <TableCell align="center">{row.capacity}</TableCell> */}
              </TableRow>
            </Tooltip>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DashTableList.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  toolTipTitle: PropTypes.string,
};

export default DashTableList;
