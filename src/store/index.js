import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city }  from './../reducers/city';
import reducers from './../reducers';

const initialState = {//Estado inicial de la aplicacion
    city: "Buenos Aires, ar"
};

//DECLARACION PARA QUE EXTENSION DEVTOOLS FUNCIONE CON EL NAVEGADOR CHROME
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



//Generando el primer store con redux
export const store = createStore( reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
