import React from 'react';
import { useSelector } from 'react-redux';
import HeaderContainer from './containers/header/header';
import Routes from './pages/routes';
import NotificationToastContainer from './containers/notification/notification';

const AppWrapper = () => {
    const user = useSelector(state => state.auth.user);
    return (
        <div className={user.tokens ? "dashboard" : "homepage"}>
            <NotificationToastContainer />
            <HeaderContainer />
            <Routes />
        </div>
    )
}

export default AppWrapper;