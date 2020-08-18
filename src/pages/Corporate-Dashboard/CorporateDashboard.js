import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import PurchaseLicense from '../../containers/corporate-panel/purchaseLicense';
import EmployeeLicenseManagement from '../../containers/corporate-panel/employeeLicenseMangement';
import CorporateLinksContainer from '../../containers/corporate-panel/corporateLinks';


const CorporateDashboard = () => {
    const user = useSelector(state => state.auth.user);
   
    const routeMatch = useRouteMatch();
    const { path } = routeMatch;
    return (
        <>
            {
                !user.tokens ? <Redirect to="/" /> :
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
            }
        </>
    )
}

export default CorporateDashboard;