import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './assets/styles/main.css';

import store from './store';
import Start from './containers';

let rootElement = document.createElement('div');
rootElement.setAttribute('id','root2');
document.body.appendChild(rootElement);


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Start />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root2'));