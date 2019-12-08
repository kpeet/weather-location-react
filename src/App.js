import React, { Component } from 'react';
//import WeatherLocation from './components/WeatherLocation/WeatherLocation'
import WeatherLocation from './components/WeatherLocation2/index'
import Location from './components/WeatherLocation/Location'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <WeatherLocation city="Bogota, col"/>
      </div>
    );
  }
}

export default App;
