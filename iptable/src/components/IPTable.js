import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '../../node_modules/@material-ui/core';

const styles = {
  root: {

  }
}


const data = [
  { IP: '192.27.0.1', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.1', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.1', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.1', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
];



function IPTable(props) {
  const { classes } = props;
  return (
    <Table >
      <TableHead>
        <TableRow>
          <TableCell>IP</TableCell>
          <TableCell>DEVICE</TableCell>
          <TableCell>ProfinetIP</TableCell>
          <TableCell>ProfinetName</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((n,i) => {
          return (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {n.IP}
              </TableCell>
              <TableCell >{n.Device}</TableCell>
              <TableCell >{n.ProfinetIP}</TableCell>
              <TableCell >{n.ProfinetName}</TableCell>
              <TableCell >{n.Description}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

  );
}


export default withStyles(styles)(IPTable);