import {  combineReducers } from 'redux';

//import headerReducer from './header';
import tabsReducer from './tabs';

const allReducers = combineReducers({
    //headerReducer: headerReducer,
    tabsReducer: tabsReducer,
});

export default allReducers; 