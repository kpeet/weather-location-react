
const location = "Buenos Aires, ar"
const api_key = "f445f01ba4a7ed0327e5e7afd457b76d"
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather"


export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;