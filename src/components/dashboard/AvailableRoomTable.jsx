import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return {name, calories, fat, carbs, protein};
// }

function createData(roomNumber, date, capacity) {
  return {roomNumber, date, capacity};
}

const columns = ['Room #', 'Next Available', 'Capacity'];
const rows = Array.from(Array(20), () => createData(10310, '28/11/23', 4));

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
// ];

function AvailableRoomTable() {
  return (
    <TableContainer
      // component={Paper}
      sx={{maxHeight: 660, px: 1}}
    >
      <Table stickyHeader sx={{minWidth: 350}} aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column}
                align="center"
                sx={{
                  color: 'rgb(75 85 99)',
                  fontSize: '1.05rem',
                }}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.roomNumber}
              className='list-hover'
              sx={{
                '&:last-child td, &:last-child th': {border: 0, pb: 4},
              }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="center">{row.roomNumber}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AvailableRoomTable;
