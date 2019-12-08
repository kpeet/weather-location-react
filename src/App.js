import React, { Component } from 'react';
import LocationList from './components/WeatherLocation2/LocationList'

import './App.css';


const cities = [
    "Santiago, cl",
    "Buenos Aires,ar",
    "Bogota, col",
    "Washington, us",
    "Barcelona, es",
]


class App extends Component {
  render() {
    return (
      <div className="App">
      <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
