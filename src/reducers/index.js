import {  combineReducers } from 'redux';

import tabsReducer from './tabs';

const allReducers = combineReducers({
    tabsReducer: tabsReducer,
});

export default allReducers; 