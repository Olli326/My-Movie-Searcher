import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { rootReducer } from './reduxSetup';
import { rootSaga } from './reduxSetup/rootSaga';
import App from './App';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(logger, sagaMiddleware), composeWithDevTools()));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
serviceWorker.unregister();
