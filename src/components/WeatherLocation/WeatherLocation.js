import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'
import  './styles.css';

const WeatherLocation = () => (
                                <div className="locationCont">
                                    <Location city={"Barcelona"}>
                                    </Location>
                                    <WeatherData/>
                                </div>
                                );
export default WeatherLocation;





