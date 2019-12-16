import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x

import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended';
import { createStore } from 'redux';

import './App.css';


const cities = [
    "Santiago, cl",
    "Buenos Aires,ar",
    "Bogota, col",
    "Washington, us",
    "Barcelona, es",
];

//Generando el primer store con redux
const store = createStore(() => {} ,
    //DECLARACION PARA QUE EXTENSION DEVTOOLS FUNCIONE CON EL NAVEGADOR CHROME
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


class App extends Component {


    constructor(){
        super();

        //Este tipo de declaración ( this.state = { algo })solo se puede hacer en el constructor
        this.state = { city: null }
    }

    handleSelectionLocation = city => {
        this.setState({city })
        console.log("handleSelectionLocation"+city);

        //Primera accion
        const action = { type: 'setCity', value: city };

        store.dispatch(action);
    }

  render() {

        const { city }= this.state;

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
