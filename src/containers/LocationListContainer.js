import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity_actionCreator } from "./../actions";
import LocationList from './../components/LocationList'



class LocationListContainer extends Component{

    handleSelectionLocation = city => {

        //Ahora puedo invocar como funcion dispatch dentro de props, la fucion setCity1, que me permite realizar un dispatch desde una funcion conectada
        this.props.setCity1(city)
    }

    render(){
        return(
            <LocationList
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectionLocation}>

            </LocationList>
        )
    }
}


LocationListContainer.propTypes={
    setCity1: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

// connect, es una funcion que espera por parametro dos funciones
const mapDispatchToPropsActions = dispatch => ({
//setCity1 es del tipo funcion que recibe un dispatch
    setCity1: value => dispatch(setCity_actionCreator(value))

});

//Conecto la funcion mapDispatchToPropsActions al componente App
export default connect(null, mapDispatchToPropsActions)(LocationListContainer)//funcion connect, recibe dos funciones y retorna una tercera funcion que espera como parametro un componente

