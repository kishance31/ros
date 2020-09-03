import React from 'react';
import { useSelector } from 'react-redux';
import HeaderContainer from './containers/header/header';
import Routes from './pages/routes';
import NotificationToastContainer from './containers/notification/notification';
import OverlayProvider from './context/loadingOverlay.context';

const AppWrapper = () => {
    const user = useSelector(state => state.auth.user);
    //user.tokens ? "dashboard" : "homepage"
    const wrapperClass = !user.token && !user.role && !user._id ? "homepage" :
        user.role.indexOf('EMPLOYEE') !== -1 ? 'dashboard item-listing' : 'dashboard'
    return (
        <div className={wrapperClass}>
            <NotificationToastContainer />
            <HeaderContainer />
            <OverlayProvider>
                <Routes />
            </OverlayProvider>
        </div>
    )
}

export default AppWrapper;