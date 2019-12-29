import { combineReducers } from 'redux';
import { cities } from "./cities";
import { city } from "./city";


/*

En el Grafo se representa


STATE:
    myCities: cities,
    currentCity: city
 */

export default combineReducers({
    cities,
    city
});