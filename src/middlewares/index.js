import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import headerMiddleware from './header';
import bodyMiddleware from './tabs';

const middleware = [
    thunk,
    headerMiddleware,
    bodyMiddleware,
];

const allMiddlewares = applyMiddleware(...middleware);

export default allMiddlewares; 