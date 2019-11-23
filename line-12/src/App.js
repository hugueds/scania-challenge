import React, { useState, useEffect } from 'react';
import { Map } from './Map';
import MapWithAMarker from './Map2';
import './App.css';


const lat = -23.68428333;
const lng = -46.51262068;



function App(props) {

  const [coord, setCoord] = useState({ lat: lat, lng: lng});

  

  useEffect(
    () => {        
        const id = setInterval(() => {
          let newCoord = {...coord};
          newCoord.lat = coord.lat + 0.0001;
          newCoord.lng = coord.lng + 0.0001;
          setCoord(newCoord);
        }, 1000)
        return () => clearInterval(id);
    },    
);

  return (
    <div className="App">
      <Map />

      <MapWithAMarker
        coord={coord}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCm_DEhKDzjQjoBOBbbyhRhMLyRFCY8QPM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
