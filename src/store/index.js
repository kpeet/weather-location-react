import { createStore } from 'redux';


//Generando el primer store con redux
export const store = createStore(() => {} ,
    //DECLARACION PARA QUE EXTENSION DEVTOOLS FUNCIONE CON EL NAVEGADOR CHROME
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
