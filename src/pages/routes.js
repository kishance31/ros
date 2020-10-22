import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import { OverlayContext } from '../context/loadingOverlay.context'
import Homepage from './Homepage/Homepage';
import CorporateDashboard from './Corporate-Dashboard/CorporateDashboard';
import EmployeeDashboard from './Employee-Dashboard/EmployeeDashboard';
import AboutUs from '../pages/Homepage/aboutUs'
import ContactUs from '../pages/Homepage/contactUs'
import setProfile from '../containers/employee-panel/setProfilePage';
import AuthModalAction, {AuthMap} from '../actions/auth.action';
import OurServices from './Homepage/OurServices';

const Routes = () => {

    const user = useSelector(state => state.auth.user);

    const { isActive, toggleOverlay } = useContext(OverlayContext);

    const location = useLocation();

    useEffect(() => {
        toggleOverlay(false);
    }, []);

    const dispatch = useDispatch();

    useEffect(() => {
        if (location.search.indexOf('reset') >= 0) {
            dispatch(AuthModalAction.toggleAuthModals(AuthMap.TOGGLE_SET_PASSWORD_MODAL, "Set Password"));
        }
    }, [])

    return (
        <LoadingOverlay
            active={isActive}
            spinner
            text='Please wait . . .'
        >
            {
                user.tokens && user.role && user._id ?
                    <Redirect
                        to={
                            user.role.indexOf('CORPORATE') !== -1 ? "/corporate/purchaseLicense" :
                                user.role.indexOf('EMPLOYEE') !== -1 && user.setFirstProfile ? "/setProfile" : '/employee/itemListing'
                        }
                    /> : null
                     (
                        location.search.indexOf('reset') < 0 ?
                            <Redirect from='/*' to="/" /> : null
                    )
            }
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/contactUs" component={ContactUs} />
                <Route path="/ourservices" component={OurServices} />
                <PrivateRoute path="/corporate" component={CorporateDashboard} user={user} />
                <PrivateRoute path="/setProfile" component={setProfile} user={user} />
                <PrivateRoute path="/employee" component={EmployeeDashboard} user={user} />
            </Switch>
        </LoadingOverlay>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            rest.user.tokens && rest.user.role && rest.user._id ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/"
                        }}
                    />
                )
        }
    />
);

export default Routes;