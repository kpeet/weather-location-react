import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../../components/WeatherLocation2/WeatherData';



const RequesterDetail = ({ weekDay, hour, data }) => (
    <div>
     <div> RequesterDetail { weekDay } hora : { hour } hs </div>
    </div>

);

RequesterDetail.prototype = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,

}


export default RequesterDetail;