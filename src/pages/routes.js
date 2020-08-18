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
                <Route path="/corporate" component={CorporateDashboard} />
                <Route path="/employee" component={EmployeeDashboard} />
            </Switch>
            {
                user.tokens ? 
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

export default Routes;