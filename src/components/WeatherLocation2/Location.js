import React from 'react';


const Location = (props) => {
    const city = props.city
    console.log(props)
    //debugger;

    return (<div><h1>{city} <br/> Buenos Aires</h1></div>)
}




export default Location;