import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
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
    const user = useSelector(state => state.auth.user, shallowEqual);

    return (
        <div className="side_space">
            {
                user.status === "APPROVED" ?
                    <CorporateLinksContainer /> : null
            }
            <Switch>
                {/* <PrivateRoute exact path={`${path}`} component={PurchaseLicense} user={user} /> */}
                <PrivateRoute path={`${path}/purchaseLicense`} component={PurchaseLicense} user={user} />
                <PrivateRoute path={`${path}/employeeLicenseManagement`} component={EmployeeLicenseManagement} user={user} />
                <PrivateRoute path={`${path}/manageAllocateLicense`} component={ManageAllocateLicense} user={user} />
                <PrivateRoute path={`${path}/employeeOrderDetails`} component={EmployeeOrderDetails} user={user} />
                <PrivateRoute path={`${path}/invoice`} component={Invoice} user={user} />
                <Route path={`${path}/myAccount`} component={MyAccount} user={user} />
                <PrivateRoute path={`${path}/productView`} component={ProductView} user={user} />
            </Switch>
        </div>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            rest.user.status === "APPROVED" ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/corporate/myAccount"
                        }}
                    />
                )
        }
    />
);

export default CorporateDashboard;