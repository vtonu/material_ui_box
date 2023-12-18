import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(weaponType, ammoType) {
  return { weaponType, ammoType };
}

const rows = [
  createData('Shotgun', 1),
  createData('M4', 250),
  createData('Sniper', 300),
  createData('Shovel', 11),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <caption>Storage table.</caption>
        <TableHead>
          <TableRow>
            <TableCell>Weapon</TableCell>
            <TableCell>Ammo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.weaponType}>
              <TableCell component="th" scope="row">
                {row.weaponType}
              </TableCell>
              <TableCell align="right">{row.ammoType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
