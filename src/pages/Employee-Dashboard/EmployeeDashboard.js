import React, {useState} from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import EmployeeLinksContainer from '../../containers/employee-panel/employeeNavLinks';
import ItemListingContianer from '../../containers/employee-panel/itemListingContainer';
import EmployeeProfile from '../../containers/employee-panel/employeeProfile';
import OrderHistory from '../../containers/employee-panel/orderHistory';

const EmployeeDashboard = () => {
    const routeMatch = useRouteMatch();
    const { path } = routeMatch;

    const [defaultCategory, setDefaultCategory] = useState("/furniture")

    return (
        <div className="item-listing">
            <div className="side_space">
                <EmployeeLinksContainer />
                <Switch>
                    {/* <Route exact path={`${path}`} component={ItemListingContianer} /> */}
                    <Route path={`${path}/itemListing/:productCategory`}
                        render={() => 
                            <ItemListingContianer setDefaultCategory={setDefaultCategory} />
                        }
                    />
                    <Route path={`${path}/profile`} component={EmployeeProfile} />
                    <Route path={`${path}/orderHistory`} component={OrderHistory} />
                    <Redirect from="/*" to={`${path}/itemListing${defaultCategory}`} />
                </Switch>
            </div>
        </div>
    )
}

export default EmployeeDashboard;