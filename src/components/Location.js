import React from 'react';

const Location = ( props ) => {



    console.log(props)
    //debugger;
    const { city } = props;

    return (<div><h1>{ city }</h1></div>);

};




export default Location;