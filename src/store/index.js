import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city as city_reducer }  from './../reducers/city'

const initialState = {//Estado inicial de la aplicacion
    city: "Buenos Aires, ar"
};

//DECLARACION PARA QUE EXTENSION DEVTOOLS FUNCIONE CON EL NAVEGADOR CHROME
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



//Generando el primer store con redux
export const store = createStore( city_reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
