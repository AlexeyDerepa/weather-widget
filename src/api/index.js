const GET_WEATHER_BY_CITY_NAME = 'http://api.openweathermap.org/data/2.5/weather?appid=b7b59940d7ef43ac24baa9fcd34d6d51&q=';

const getRequest = (url) => {
    return fetch(url).then(status).then(json).catch(console.error);
};
const json = response => response.json();
const status = response => {
    return (response.status >= 200 && response.status < 300)
        ? Promise.resolve(response)
        : Promise.reject(new Error(response.statusText))
}

export const loadWeatherByCityNameRequest = (cityName) =>
    getRequest(GET_WEATHER_BY_CITY_NAME.concat(cityName));
