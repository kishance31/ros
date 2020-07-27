import React from  'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import CorporateDashboard from './pages/Corporate-Dashboard/CorporateDashboard';
import EmployeeDashboard from './pages/Employee-Dashboard/EmployeeDashboard';

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