import * as types from '../actions/ActionTypes';
import { loadWeatherByCityNameRequest } from '../api';
import { dataLoaded } from '../actions/header'
function headerMiddleware({ getState }) {
    return next => action => {
        switch (action.type) {
            case types.FIND_CITY:
                loadWeatherByCityNameRequest(action.payload)
                    .then(response => next(dataLoaded(response)))
                    .catch(e => console.error(e))

                break;

            default:
                break;
        }

        return next(action);
    }
}



export default headerMiddleware;