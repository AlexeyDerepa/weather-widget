import * as types from '../actions/ActionTypes';
import updateTabsList, {deleteTabFromTabsList, activeTab}from '../addition';

let initialState = {
    tabsList: [],
    currentActiveTab: null,
    details: null,
};

function tabsReducer(state = initialState, action) {

    switch (action.type) {

        case types.DATA_LOADED:
            return updateObject(state, {
                tabsList: updateTabsList(state, action),
                currentActiveTab: action.payload.id,
                details: action.payload
            });

        case types.DELETE_TAB:
            return updateObject(state, {
                tabsList: deleteTabFromTabsList(state, action),
                currentActiveTab: activeTab(state, action),
                details: state.currentActiveTab === action.payload.id? null: state.details,
            });

        case types.ACTIVE_TAB:
            let tab = state.tabsList.find(item => item.id === action.payload.id);
            return updateObject(state, {
                details: tab,
                currentActiveTab: tab.id,
            });

        case types.DATA_INITIALIZED:
            return updateObject(state, {
                tabsList: action.payload.tabsList,
                currentActiveTab: action.payload.currentActiveTab,
                details: action.payload.tabsList.find(item => item.id === action.payload.currentActiveTab)
            });

        default:
            return state;

    }

    function updateObject(obj, newProperties) {
        return Object.assign({}, obj, newProperties);
    }
}

export default tabsReducer;