import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IPTable from '../components/IPTable';

const styles = {
  root: {
    width: '50%',
    display: 'flex'
  }
}

class MainContainer extends React.Component {
  constructor(props) {
    super(props);    
  }

  

render() {
  return (
    <IPTable test={"IP"} />
  );
}
}


// function MainContainer(props) {
//   const { classes } = props;  
//   return (
//     <div className={classes.root}>
//       <IPTable test={teste}/>
//     </div>
//   );
// }

export default withStyles(styles)(MainContainer);
