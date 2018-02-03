import * as types from './ActionTypes';

export const findCity = (cityName) => {
    return {
        type: types.FIND_CITY,
        payload: cityName
    }    
};

export const dataLoaded = (data) => {
    return {
        type: types.DATA_LOADED,
        payload: data
    }
};

export const  dataInitialized = (data) => {
    return {
        type: types.DATA_INITIALIZED,
        payload: data
    }
};