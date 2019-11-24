
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const background = '#041E42';

export default (props) => {
    return (
        <AppBar position="static" style={{ background }}>
            <Toolbar style={styles.warningBar}>
                <Typography style={styles.warning}>
                    Este não é um Aplicativo oficial, quaisquer divergências nas informações apresentadas não é de responsabilidade do serviço de transportes
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

const styles = {
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        textAlign: 'center',
        fontSize: '2vh'
    },
    warningBar: {
        display: 'flex',
        justifyContent: 'center'
    },
    warning: {
        display: 'flex',
        fontSize: '1.75vh',
        color: 'white'
    }
}
