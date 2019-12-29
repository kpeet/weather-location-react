import { createStore } from 'redux';
import { city as city_reducer }  from './../reducers/city'

const initialState = {//Estado inicial de la aplicacion
    city: "Buenos Aires, ar"
};



//Generando el primer store con redux
export const store = createStore( city_reducer, initialState,
    //DECLARACION PARA QUE EXTENSION DEVTOOLS FUNCIONE CON EL NAVEGADOR CHROME
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
