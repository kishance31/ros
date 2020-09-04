import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import { OverlayContext } from '../context/loadingOverlay.context'
import Homepage from './Homepage/Homepage';
import CorporateDashboard from './Corporate-Dashboard/CorporateDashboard';
import EmployeeDashboard from './Employee-Dashboard/EmployeeDashboard';
import AboutUs from '../pages/Homepage/aboutUs'
import ContactUs from '../pages/Homepage/contactUs'
const Routes = () => {

    const user = useSelector(state => state.auth.user);

    const {isActive, toggleOverlay} = useContext(OverlayContext);

    useEffect(() => {
        toggleOverlay(false);
    }, [])

    return (
        <LoadingOverlay
            active={isActive}
            spinner
            text='Please wait . . .'
        >
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/contactUs" component={ContactUs} />
                <PrivateRoute path="/corporate" component={CorporateDashboard} user={user} />
                <PrivateRoute path="/employee" component={EmployeeDashboard} user={user} />
                <Redirect from='/*' to="/" />
            </Switch>
            {
                user.tokens && user.role && user._id ?
                    <Redirect
                        to={
                            user.role.indexOf('CORPORATE') !== -1 ? "/corporate" :
                                user.role.indexOf('EMPLOYEE') !== -1 ? "/employee" : "/"
                        }
                    /> : null
            }
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