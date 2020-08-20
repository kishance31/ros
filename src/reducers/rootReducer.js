import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { connectRouter } from 'connected-react-router';
import authReducer from './auth.reducer'
import purchaseLicenseReducer from './purchaseLicense.reducer';
import notitficationReducer from './notifications.reducer';
import myProfileReducer from './myprofile.reducer';

const createRootReducer = (history) => {

    //save the auth user state in the storage
    const authPersistConfig = {
        key: 'auth',
        storage: storage,
    }

    return combineReducers(
        {
            router: connectRouter(history),
            auth: persistReducer(authPersistConfig, authReducer),
            purchaseLicense: purchaseLicenseReducer,
            notification: notitficationReducer,
            myProfile: myProfileReducer
        }
    )
};

export default createRootReducer;