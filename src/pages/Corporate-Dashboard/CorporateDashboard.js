import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CorporateLinksContainer from '../../containers/corporate-panel/corporateLinks';
import PurchaseLicense from '../../containers/corporate-panel/purchaseLicense';
import EmployeeLicenseManagement from '../../containers/corporate-panel/employeeLicenseMangement';
import ManageAllocateLicense from '../../containers/corporate-panel/manageAllocateLicense';
import EmployeeOrderDetails from '../../containers/corporate-panel/employeeOrderDetails';
import Invoice from '../../containers/corporate-panel/invoice';
import MyAccount from '../../containers/corporate-panel/myAccount';
import ProductView from '../../containers/corporate-panel/productView';

const CorporateDashboard = () => {
    const routeMatch = useRouteMatch();
    const { path } = routeMatch;
    
    return (
        <div className="side_space">
            <CorporateLinksContainer />
            <Switch>
                <Route exact path={`${path}`} component={PurchaseLicense} />
                <Route path={`${path}/purchaseLicense`} component={PurchaseLicense} />
                <Route path={`${path}/employeeLicenseManagement`} component={EmployeeLicenseManagement} />
                <Route path={`${path}/manageAllocateLicense`} component={ManageAllocateLicense} />
                <Route path={`${path}/employeeOrderDetails`} component={EmployeeOrderDetails} />
                <Route path={`${path}/invoice`} component={Invoice} />
                <Route path={`${path}/myAccount`} component={MyAccount} />
                <Route path={`${path}/productView`} component={ProductView} />
            </Switch>
        </div>
    )
}

export default CorporateDashboard;