import React from 'react';
import PropTypes from 'prop-types'


const Location = (props) => {
    //Destructuring

    const {city} = props;


    //Sin Destructuring
    const city2 = props.city
    console.log(props)
    //debugger;

    return (<div><h1>{city} <br/> Buenos Aires</h1></div>)
};

Location.propTypes ={
    city: PropTypes.string.isRequired,
}




export default Location;