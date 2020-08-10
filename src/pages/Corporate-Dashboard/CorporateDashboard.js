import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PurchaseLicense from '../../containers/corporate-panel/purchaseLicense';
import EmployeeLicenseManagement from '../../containers/corporate-panel/employeeLicenseMangement';
import CorporateLinksContainer from '../../containers/corporate-panel/corporateLinks';


const CorporateDashboard = () => {
    const routeMatch = useRouteMatch();
    const { path } = routeMatch;
    return (
        <div className="dashboard">

        <div className="side_space">
            <CorporateLinksContainer />
            <Switch>
                <Route exact path={`${path}`} component={PurchaseLicense} />
                <Route path={`${path}/purchaseLicense`} component={PurchaseLicense} />
                <Route path={`${path}/employeeLicenseManagement`} component={EmployeeLicenseManagement} />
            </Switch>
        </div>
        </div>
    )
}

export default CorporateDashboard;