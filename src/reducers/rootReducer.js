import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth/auth.reducer'
import purchaseLicenseReducer from './auth/purchaseLicense.reducer';

const createRootReducer = (history) => combineReducers(
    {
        router: connectRouter(history),
        auth: authReducer,
        purchaseLicense:purchaseLicenseReducer
    }
);

export default createRootReducer;