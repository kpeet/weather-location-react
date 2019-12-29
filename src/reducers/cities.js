import { SET_FORECAST_DATA} from "../actions";

export const cities = (state = {}, action) => {
    switch (action.type){
        case SET_FORECAST_DATA:
            console.log("action.payload")
            console.log(action.payload)
            const { city, forecastData } = action.payload;
            return { ...state, [city]: { forecastData}};//[city] indico que es nombre de diccionario

        default:
            return state;
    }
}