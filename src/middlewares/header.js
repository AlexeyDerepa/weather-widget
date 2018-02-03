import * as types from '../actions/ActionTypes';
import { loadWeatherByCityNameRequest } from '../api';
import { dataLoaded } from '../actions/header'
function headerMiddleware({ getState }) {
    return next => action => {
        switch (action.type) {
            case types.FIND_CITY: {
                loadWeatherByCityName(action.payload, next);
                break;
            }
            case types.ACTIVE_TAB: {
                loadWeatherByCityName(action.payload.name, next);
                break;
            }
            default:
                break;
        }

        return next(action);
    }
}

const loadWeatherByCityName = (cityName, next) => {
    return loadWeatherByCityNameRequest(cityName)
        .then(response => next(dataLoaded(response)))
        .catch(e => console.error(e))
}

export default headerMiddleware;