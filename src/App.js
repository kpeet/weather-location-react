import React, { Component } from 'react';
import {PropTypes} from 'prop-types'

import { MuiThemeProvider } from '@material-ui/core/styles'; // v1.x
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtended from './components/ForecastExtended';



import './App.css';


const cities = [
    "Santiago, cl",
    "Buenos Aires,ar",
    "Bogota, col",
    "Washington, us",
    "Barcelona, es",
];



class App extends Component {


    constructor(){
        super();

        //Este tipo de declaración ( this.state = { algo })solo se puede hacer en el constructor
        this.state = { city: null }
    }

  render() {

        const { city }= this.state;

    return (
        <MuiThemeProvider>
        <Grid>
            <Row>
              title="Weather App"
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <LocationListContainer
                        cities={cities}
                       >

                    </LocationListContainer>
                </Col>
                <Col xs={12} md={6}>
                    <div className='details'>

                        {
                            city &&
                                <ForecastExtended city={city} >
                                </ForecastExtended>
                         }
                    </div>
                </Col>
            </Row>
        </Grid>
        </MuiThemeProvider>

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


//retorno el nuevo componente conectado a la nueva funcion
export default App;

