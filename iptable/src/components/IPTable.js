import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '../../node_modules/@material-ui/core';



const data = [
  { IP: '192.27.0.1', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.2', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.3', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.4', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.5', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.6', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.7', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.8', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.9', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.10', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
  { IP: '192.27.0.11', Device: 'A', ProfinetIP: 'LOREN', ProfinetName: 'IPSON', Description: 'TESTE' },
];

const styles = {
  root: {
    background: 'red'
  }
}

class IPTable extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
    this.state = {
      page: 0,
      rowsPerPage: 5
    }
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  test = (event,a) => {
    console.log(event, a);
  }

  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>{this.props.test}</TableCell>
            <TableCell>DEVICE</TableCell>
            <TableCell>ProfinetIP</TableCell>
            <TableCell>ProfinetName</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, i) => {
            return (
              <TableRow key={i} onClick={this.test(this, 'a')} >
                <TableCell component="th" scope="row">{n.IP}</TableCell>
                <TableCell >{n.Device}</TableCell>
                <TableCell >{n.ProfinetIP}</TableCell>
                <TableCell >{n.ProfinetName}</TableCell>
                <TableCell >{n.Description}</TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            // ActionsComponent={TablePaginationActionsWrapped}
            />
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}


export default withStyles(styles)(IPTable);