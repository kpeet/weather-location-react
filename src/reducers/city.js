import { SET_CITY} from "../actions";

//RECUCE CITY
export const city = (state = {}, action) => {
    switch(action.type)
    {
    case SET_CITY:
        return { ...state, city: action.value }//Sentencia que agrega a un state un nuevo valor, con esto tenemos un estado inmutable que va cambiando en el tiempo
    default:
        return state;
    }

}