import * as types from './ActionTypes';

export const chooseTab = (tab) => {
    return {
        type: types.ACTIVE_TAB,
        payload: tab
    }
};
export const deleteTab = (tab) => {
    return {
        type: types.DELETE_TAB,
        payload: tab
    }
};
export const getInitialData = () => {
    return {
        type: types.GET_INITIAL_DATA
    }
};

