import React from 'react';

import Navbar from './components/Navbar';
import Map from './containers/Map';
import GeoStatus from './components/GeoStatus';
import Footer from './components/Footer';

import GeoService from './services/geoService';

import './App.css';

const updateTime = process.env.REACT_APP_UPDATE_TIME || 5000;

class App extends React.Component {

  state = {
    user: '',
    enableTracking: true,
    coord: {
      lat: 0,
      lng: 0,
      speed: 0
    },
    lastUpdated: '',
  }

  componentDidMount() {
    this.updateCoord();
    setInterval(() => {
      this.updateCoord();
    }, updateTime);
  }

  updateCoord = async () => {
    const geoService = new GeoService();
    let coord = { ...this.state.coord };
    let lastUpdated = { ...this.state.lastUpdated }
    const newCoord = await geoService.get();
    coord = newCoord.attributes;
    lastUpdated = newCoord.last_updated;
    this.setState({ coord });
    this.setState({ lastUpdated });
  }


  render() {

    const { coord } = this.state;

    return (

      <div className="App">

        <Navbar open={false} />
        <Map coord={coord} />
        <GeoStatus coord={coord} lastUpdated={this.state.lastUpdated} />
        <Footer />

      </div>
    )
  }

}

export default App;
