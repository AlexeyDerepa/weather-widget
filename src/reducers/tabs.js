import * as types from '../actions/ActionTypes';

let initialState = {
    tabsList: [],
    currentActiveTab: null,
    details: null,
};

function tabsReducer(state = initialState, action) {

    switch (action.type) {

        case types.DATA_LOADED:
            let newTab = state.tabsList.find(item => item.id === action.payload.id);
            return updateObject(state, {
                tabsList: !!newTab ? state.tabsList : state.tabsList.concat(action.payload),
                currentActiveTab: action.payload.id,
                details: action.payload
            });

        case types.DELETE_TAB:
            return updateObject(state, {
                tabsList: state.tabsList.filter(item => item.id !== action.payload.id),
                currentActiveTab: null,
                details: null
            });

        case types.ACTIVE_TAB:
            let tab = state.tabsList.find(item => item.id === action.payload.id);
            return updateObject(state, {
                details: tab,
                currentActiveTab: tab.id,
            });

        default:
            return state;

    }

    function updateObject(obj, newProperties) {
        return Object.assign({}, obj, newProperties);
    }
}

export default tabsReducer;