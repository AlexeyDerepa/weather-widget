import * as types from '../actions/ActionTypes';
import { dataInitialized } from '../actions/header';
import data from './initialData';
import updateTabsList, { deleteTabFromTabsList, activeTab } from '../addition';




function bodyMiddleware({ getState }) {
    return next => action => {
        console.log(getState().tabsReducer);
        switch (action.type) {

            case types.GET_INITIAL_DATA: {
                let tabsList = getDataFromLocalStorage('tabsList');
                let currentActiveTab = getDataFromLocalStorage('currentActiveTab');

                let localData = { tabsList: tabsList, currentActiveTab: currentActiveTab };

                if (!tabsList/* || tabsList.length === 0*/) {
                    currentActiveTab = 5808453;
                    updateLocalStorage('tabsList', data);
                    updateLocalStorage('currentActiveTab', currentActiveTab);

                    localData = { tabsList: data, currentActiveTab: currentActiveTab };
                }

                next(dataInitialized(localData));

                break;
            }

            case types.ACTIVE_TAB: {
                updateLocalStorage('currentActiveTab', action.payload.id)
                break;
            }

            case types.DELETE_TAB: {
                let tabsList = getState().tabsReducer.tabsList.filter(item => item.id !== action.payload.id)
                let active = activeTab(getState().tabsReducer, action)
                updateLocalStorage('tabsList', tabsList);
                updateLocalStorage('currentActiveTab', active)
                break;
            }

            case types.DATA_LOADED: {
                let tabsList = updateTabsList(getState().tabsReducer, action)
                updateLocalStorage('tabsList', tabsList);
                updateLocalStorage('currentActiveTab', action.payload.id);

                break;
            }


            default:
                break;
        }

        return next(action);
    }
}

let updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

let getDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export default bodyMiddleware;