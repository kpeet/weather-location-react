//Separacion de Componente y Redux-estado de aplicacion
import transforForecast from "../services/transformForecast";


export const  SET_CITY ='SET_CITY';
export const  SET_FORECAST_DATA ='SET_FORECAST_DATA';

export const setCity_actionCreator = payload => (
    {type: SET_CITY , payload}
);
export const setForecastData = payload => (
    {type: SET_FORECAST_DATA, payload}
);

const api_key = "f445f01ba4a7ed0327e5e7afd457b76d";
const url_base_weather = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        //fetch or axios
        const url_forecast = `${url_base_weather}?q=${payload}&appid=${api_key}`;


        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity_actionCreator(payload));


        return fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecastData = transforForecast(weather_data);
                console.log("forecastData");
                console.log(forecastData);
                //modifcar el estado con el resultado de la promise(fetch)
                dispatch(setForecastData({ city: payload, forecastData}))
            }
        )
    };
}