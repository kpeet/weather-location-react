import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation'
import Location from './components/Location'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Location city={ "Rio de Janeiro "}/>
      <WeatherLocation/>
      </div>
    );
  }
}

export default App;
