import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IPTable from '../components/IPTable';

const styles = {
  root: {
    width: '50%',
    display: 'flex'
  }
}

function MainContainer(props) {
  const { classes } = props;  
  return (
    <div className={classes.root}>
      <IPTable/>
    </div>
  );
}

export default withStyles(styles)(MainContainer);
