import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

// const bus = '../favicon.png';
const gmkey = 'AIzaSyCm_DEhKDzjQjoBOBbbyhRhMLyRFCY8QPM';

const Map = (props) => {

    return (
        <MapWithAMarker
            coord={props.coord}
            isMarkerShown
            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + gmkey + "&v=3.exp&libraries=geometry,drawing,places"}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `72.5vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );

};

const MapWithAMarker = withScriptjs(withGoogleMap(props => {

    const coord = {
        lat: props.coord.latitude || 0,
        lng: props.coord.longitude || 0
    }

    return (

        <GoogleMap
            defaultZoom={15}
            defaultCenter={coord}
            center={coord}
        >
            <Marker position={coord} opacity={0.7} />
            
        </GoogleMap>
    );
}
));



export default Map;