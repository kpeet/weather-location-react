import React, { Component } from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended';


import { setCity_actionCreator } from "./actions";
import { store } from './store';

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

    handleSelectionLocation = city => {
        this.setState({city })
        console.log("handleSelectionLocation"+city);

        //store.dispatch(setCity_actionCreator(city));

        //Ahora puedo invocar como funcion dispatch dentro de props, la fucion setCity1, que me permite realizar un dispatch desde una funcion conectada
        this.props.setCity1(city)
    }

  render() {

        const { city }= this.state;

    return (
        <MuiThemeProvider>
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

///////////DESACOPLE DE (REDUX) STORE-DISPATCH SET POR MEDIO DE CONNECT

//Indico via proptype que setCity1 sea del tipo funcion
App.prototype = {
    setCity1: PropTypes.func.isRequired,
}

// connect, es una funcion que espera por parametro dos funciones
const mapDispatchToPropsActions = dispatch => ({
//setCity1 es del tipo funcion que recibe un dispatch
    setCity1: value => dispatch(setCity_actionCreator(value))

});

//Conecto la funcion mapDispatchToPropsActions al componente App
const AppConnected = connect(null, mapDispatchToPropsActions)(App)//funcion connect, recibe dos funciones y retorna una tercera funcion que espera como parametro un componente

//retorno el nuevo componente conectado a la nueva funcion
export default AppConnected;

