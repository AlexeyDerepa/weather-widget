import { createStore } from 'redux';

import allReducers from './reducers';
import allMiddlewares from './middlewares';

const store = createStore(
    allReducers,
    allMiddlewares
);

export default store; 