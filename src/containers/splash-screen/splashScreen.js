import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import SplashScreenComponent from '../../components/splash-screen/splashScreen';
import { verifyUserToken, expireTokenLogout } from '../../actions/auth.action';

const SplashScreenContainer = ({ toggleSplashScreen }) => {
    const { user } = useSelector(state => state.auth, shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => {
        (async function () {
            if (user.tokens && user.role) {
                let result = await verifyUserToken(user.tokens);
                if (result && result.response && result.response.responseCode === 200) {
                    toggleSplashScreen(false);
                } else {
                    toggleSplashScreen(false);
                    dispatch(expireTokenLogout());
                }
            } else {
                toggleSplashScreen(false);
            }
        })()
    }, []);

    return (
        <>
            <SplashScreenComponent />
        </>
    )
}

export default SplashScreenContainer;