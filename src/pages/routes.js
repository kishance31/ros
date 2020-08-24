import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import Homepage from './Homepage/Homepage';
import CorporateDashboard from './Corporate-Dashboard/CorporateDashboard';
import EmployeeDashboard from './Employee-Dashboard/EmployeeDashboard';

const Routes = () => {

    const user = useSelector(state => state.auth.user);
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        setShowOverlay(false);
    }, [])

    return (
        <LoadingOverlay
            active={showOverlay}
            spinner
            text='Please wait . . .'
        >
            <Switch>
                <Route exact path="/" component={Homepage} />
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