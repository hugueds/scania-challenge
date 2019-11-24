import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";



const Map = (props) => {

    return (
        <MapWithAMarker
            coord={props.coord}
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCm_DEhKDzjQjoBOBbbyhRhMLyRFCY8QPM&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `72.5vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );

};

const MapWithAMarker = withScriptjs(withGoogleMap(props => {

    // pegar GeoLoc da Scania
    // const lat = -23.6843437; // TEST 
    // const lng = -46.5105444; // TEST
    // const [coord] = useState({ lat: props.latitude || lat, lng: props.longitude || lng }); 

    const coord = {
        lat: props.coord.latitude || 0,
        lng: props.coord.longitude || 0
    }

    console.log(coord)

    return (

        <GoogleMap
            defaultZoom={15}
            defaultCenter={coord}
            center={coord}
        >
            <Marker position={coord} />

        </GoogleMap>
    );
}
));



export default Map;