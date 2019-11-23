import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";



const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={props.coord}
    >
        <Marker
            position={props.coord}
        />
    </GoogleMap>
));

export default MapWithAMarker;
