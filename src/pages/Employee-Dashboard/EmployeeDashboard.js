import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeLinksContainer from '../../containers/employee-panel/employeeNavLinks';
import ItemListingContianer from '../../containers/employee-panel/itemListingContainer';
import EmployeeProfile from '../../containers/employee-panel/employeeProfile';
import OrderHistory from '../../containers/employee-panel/orderHistory';
import { categoryListAsync } from '../../actions/itemListing.action'
import CartModal from '../../containers/employee-panel/cartModal';
import ProductDeliverAddressPage from '../../containers/employee-panel/productDeliverAddressPage';
import ProductDispatchMessagePage from '../../containers/employee-panel/productDispatchMessagePage'
import cartActions from '../../actions/cart.action';
import FAQS from '../Homepage/FAQs';

const EmployeeDashboard = () => {
    const dispatch = useDispatch();
    const routeMatch = useRouteMatch();
    const { path } = routeMatch;
    useEffect(() => {
        dispatch(categoryListAsync())
    }, []);

    const selectedCategoryRoute = useSelector(state => state.itemListing.selectedCategoryRoute);
    const isOpenCart = useSelector(state => state.cart.openCart);
    const address = useSelector(state => state.auth.user.address)
    const isOpenThankYouModal = useSelector(state => state.cart.modals.ShowthankYouModal);
    const isOpenDispatchModal = useSelector(state => state.cart.modals.showAdminApprovalModal);

    return (
        <div className="item-listing">
            <div className="side_space">
                <EmployeeLinksContainer />
                <CartModal
                    isOpen={isOpenCart}
                    toggleModal={() => dispatch(cartActions.toggleCart())}
                />
                <ProductDeliverAddressPage
                    isOpen={isOpenThankYouModal}
                    toggleModal={() => dispatch(cartActions.closeAllModals())}
                    address={address}
                />
                <ProductDispatchMessagePage
                    isOpen={isOpenDispatchModal}
                    toggleModal={() => dispatch(cartActions.closeAllModals())}
                />
                {
                    path && <Redirect from="/*" to={`/employee/itemListing${selectedCategoryRoute}`} />
                }
                <Switch>
                    {/* <Route exact path={`${path}`} component={ItemListingContianer} /> */}
                    <Route path={`${path}/itemListing/:category?/:subcategory?`}
                        component={ItemListingContianer}
                    />
                    <Route path={`${path}/profile`} component={EmployeeProfile} />
                    <Route path={`${path}/orderHistory`} component={OrderHistory} />
                    <Route path={`${path}/faqs`} component={FAQS} />
                    {/* <Redirect from="/*" to={`${path}/itemListing${defaultCategory}`} /> */}
                </Switch>

            </div>
        </div>
    )
}

export default EmployeeDashboard;