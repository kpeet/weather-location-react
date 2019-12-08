import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'


const Location = (props) => {
    //Destructuring

    const {city} = props;


    //Sin Destructuring
    const city2 = props.city
    console.log(props)
    //debugger;

    return (<div className="locationCont"><h1>{city}</h1></div>)
};

Location.propTypes ={
    city: PropTypes.string.isRequired,
}




export default Location;