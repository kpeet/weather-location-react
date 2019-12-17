import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../../components/WeatherLocation2/WeatherData';



const OperationDetail = ({ weekDay, hour, data }) => (
    <div>
     <div> OperationDetail { weekDay } hora : { hour } hs </div>

    </div>

);

OperationDetail.prototype = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,

}


export default OperationDetail;