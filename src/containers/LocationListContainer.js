import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity } from "./../actions";
import LocationList from './../components/LocationList'

/*

Connect (1, 2 )(Componet)

1: MapStateToProps(values) => viene con el estado de la aplicacion, le devolvemos un objeto con
 las propiedades que necesitamos y esas propiedades, connect las inyecta en el componente como props

podemos acceder con this.props

2: MapDispatchToProps(func) => le retornamos un objeto con funciones, que connect las va a vincular como funciones dentro del componente
 */



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
    setCity1: payload => dispatch(setSelectedCity(payload))

});

//Conecto la funcion mapDispatchToPropsActions al componente App
export default connect(null, mapDispatchToPropsActions)(LocationListContainer)//funcion connect, recibe dos funciones y retorna una tercera funcion que espera como parametro un componente

