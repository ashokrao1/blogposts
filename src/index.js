
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import mainReducer from './main-reducer';
//import mainSaga from './main-saga';
import {watchGetBlogPost as mainSaga} from './modules/blog-post/blog-post-saga';


import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mainSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
