import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../../components/WeatherLocation2/WeatherData';



const AnticipoRepactacionList = ({ weekDay, hour, data }) => (
    <div>
     <div> AnticipoRepactacionList { weekDay } hora : { hour } hs </div>

    </div>

);

AnticipoRepactacionList.prototype = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,

}


export default AnticipoRepactacionList;