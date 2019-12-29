import React from 'react';
import PropTypes from 'prop-types';
import AnticipoRepactacion from './AnticipoRepactacion/index';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";


const AnticipoRepactacionList = ( { cities , onSelectedLocation}) => {
    console.log(cities)

    const handlerWeatherLocationClick = city => {
        console.log("handlerWeatherLocationClick");
        onSelectedLocation(city);
    }


    const strToComponent = (cities) => {

        return  cities.map( (city ) =>
            (
                <ListItem button  key={city.id}>
                    <ListItemText primary={`Item ---- ${city.id}`} />

                </ListItem>
            )

        );
    }
    function renderRow(props) {

        const list = cities.map((city ) =>
            (
                <ListItem button  key={props.id}>
                    <ListItemText primary={`Item ---- ${city.id}`} />

                </ListItem>
            )
        )

        return list
    };




    return (
            <div >
                <FixedSizeList height={400} width={360} itemSize={46} itemCount={cities.length}>
                    {renderRow}
                </FixedSizeList>


            </div>
        );

};


AnticipoRepactacionList.prototype = {
    cities: PropTypes.array.isRequired,

}



export default AnticipoRepactacionList;

/*
<AnticipoRepactacion
                key = {city}
                city={city}
                onWeatherLocationClick={ () => handlerWeatherLocationClick(city)}

            />
 */