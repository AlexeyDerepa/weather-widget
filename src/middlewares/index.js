import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import headerMiddleware from './header';
import bodyMiddleware from './tabs';

const middleware = [
    thunk,
    headerMiddleware,
    bodyMiddleware,
    createLogger(),
];

const allMiddlewares = composeWithDevTools(applyMiddleware(...middleware));

export default allMiddlewares; 