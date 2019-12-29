import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import {PropTypes} from 'prop-types'
import getUrlWeatherByCity from '../../../services/getUrlWeatherByCity';
import Location from './../../WeatherLocation2/WeatherData/Location';
import WeatherData from './../../WeatherLocation2/WeatherData/index';
import './styles.css'


import transformWeather from '../../../services/transformWeather'
import {api_weather} from '../../../constants/api_url'






class AnticipoRepactacion extends Component{

    constructor(props){
        super(props)
        const { city }=props;
        //Esta invocacion solo puede ser usada en el constructor
        this.state={
            city: city,
            data: null,
        }
        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.handleUpdateClick()

    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate")


    }



    handleUpdateClick = () =>{

        /*
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather).then(resolve =>{
            console.log(resolve)
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);

            console.log(newWeather)
            this.setState({
                data: newWeather
            })



        })*/
        console.log("Actualizado")
        /* this.setState({
                 city: "Montevideo",
                 data: data2
             }
         );*/
    }


    render() {
        const {city, data}=this.state;

        console.log("render")
        const {onWeatherLocationClick} = this.props
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}/>

                {data ?
                    <WeatherData data={data}/> :
                    <CircularProgress/>
                }

                /*<button onClick={this.handleUpdateClick}>Actualizar</button> */
            </div>
        );
    };

}


AnticipoRepactacion.propTypes ={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}



export default AnticipoRepactacion;