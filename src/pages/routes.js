import React from  'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import CorporateDashboard from './Corporate-Dashboard/CorporateDashboard';
import EmployeeDashboard from './Employee-Dashboard/EmployeeDashboard';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/corporate" component={CorporateDashboard} />
            <Route path="/employee" component={EmployeeDashboard} />
        </Switch>
    )
}

export default Routes;