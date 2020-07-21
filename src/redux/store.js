import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import createRootReducer from '../reducers/rootReducer';

//creating browser history object
const { createBrowserHistory } = require('history');
export const history = createBrowserHistory();


const initialState = {};
let enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);

    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

const configureStore = () => createStore (
    createRootReducer(history),
    initialState,
    composedEnhancers
);

export default configureStore;