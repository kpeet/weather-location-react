import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x

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

    handleSelectionLocation = city => {
    console.log("handleSelectionLocation"+city)
    }

  render() {

    return (
        <Grid>
            <Row>
                Titulo
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <LocationList
                        cities={cities}
                        onSelectedLocation={this.handleSelectionLocation}>

                    </LocationList>
                </Col>
                <Col xs={12} md={6}>
                    <div className='details'></div>
                </Col>
            </Row>
        </Grid>

    );
      {/*
        <MuiThemeProvider>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className='red'>MD</div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className='green'>MD</div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className='blue' color='blue'>MD</div>
                    </Col>

                </Row>
            </Grid>
            </MuiThemeProvider>*/}
  }
}

export default App;
