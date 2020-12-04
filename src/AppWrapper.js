import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderContainer from './containers/header/header';
import Routes from './pages/routes';
import NotificationToastContainer from './containers/notification/notification';
import OverlayProvider from './context/loadingOverlay.context';
import { expireTokenLogout } from './actions/auth.action';
import { SplashScreenContext } from './context/splashScreenContext';
import SplashScreenContainer from './containers/splash-screen/splashScreen';

const AppWrapper = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const { isActive, toggleSplashScreen } = useContext(SplashScreenContext);
    console.log(isActive)
    //user.tokens ? "dashboard" : "homepage"

    useEffect(() => {
        if (user.tokens && (!user.role || !user._id)) {
            dispatch(expireTokenLogout());
        }
    }, []);

    const wrapperClass = !user.tokens || !user.role || !user._id ? "homepage" :
        user.role === 'EMPLOYEE' ? 'dashboard item-listing' : 'dashboard'
    return (

        <div className={wrapperClass}>
            {
                isActive ? (
                    <SplashScreenContainer toggleSplashScreen={toggleSplashScreen} />
                ) : (
                        <>
                            <NotificationToastContainer />
                            <OverlayProvider>
                                <HeaderContainer />
                                <Routes />
                            </OverlayProvider>
                        </>
                    )
            }
        </div>
    )
}

export default AppWrapper;