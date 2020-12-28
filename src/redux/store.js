import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createRootReducer from '../reducers/rootReducer';

const initialState = {};
let enhancers = [];
const middleware = [thunk];

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
    createRootReducer(),
    initialState,
    composedEnhancers
);

export default configureStore;