import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ForecastExtended extends Component {



    render(){
        // es casi lo mismo a const { city } = this.props; aqui estoy haciendo Destructuring
        const city = this.props.city;

        return (<div className={'forecastTitle'}>
            <h2  >Pronóstico Extendido para { city } </h2>

            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;