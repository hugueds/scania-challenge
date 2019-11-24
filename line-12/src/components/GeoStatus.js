import React from 'react';
import moment from 'moment';

const styles = {
    background: '#FAFAFA',
    display: 'flex',
    flexAlign: 'center',
    justifyContent: 'space-around',
    margin: '0.8vh 0 0.8vh 0',
    fontSize: '3vw',
    item: {
        display: 'flex'
    },
    time: {
        display: 'flex'
    }
}

const GeoStatus = (props) => {

    const coord = props.coord;
    const lastUpdated = props.lastUpdated;

    const lat = +(parseFloat(coord.latitude).toFixed(4))
    const lng = +(parseFloat(coord.longitude).toFixed(4))

    return (
        <div style={styles}>
            <div style={styles.item}>
                LAT: { lat || 0}
            </div>
            <div style={styles.item}>
                LON: { lng || 0}
            </div>
            <div style={styles.item}>
                VEL: {coord.speed || 0}<div></div>
            </div>
            <div style={styles.time}>
                TIME: {moment(lastUpdated).format('DD/MM/YYYY - HH:mm:ss')}
            </div>
        </div>
    );

}

export default GeoStatus;
