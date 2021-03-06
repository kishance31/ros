import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavbarBrand } from "reactstrap";
import logo from './../../assets/images/logo.png';
import { CartIcon } from '../../components/icons/Icons';
import AuthModelAction, { signOutUserAsync, AuthMap } from '../../actions/auth.action';
import cartActions from '../../actions/cart.action';
import { getCartByEmployeeIdAsync } from '../../actions/itemListing.action';

const HeaderUserDetails = (props) => {

    const [showButton, setShowButton] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);
    const isCartEmpty = useSelector(state => state.cart.shoppingCart.length);

    const onClickLogout = () => {
        dispatch(signOutUserAsync(user.tokens, user.role));
    }
    const onclickCart = () => {
        dispatch(cartActions.toggleCart())
    }

    const toggleChangePassword = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SET_PASSWORD_MODAL, "Change Password"));
    }

    return (
        <div className="user-navbar-action">
            <NavbarBrand href="/">
                <img src={logo} className="logo logo img-fluid" />
            </NavbarBrand>
            <div className="shopping_bag_navbar ml-md-auto">
                <div className="shopping_bag_icon">
                    <div className="dropdown">
                        {
                            user.role === 'EMPLOYEE' ?
                                <span onClick={() => onclickCart()}>
                                    <CartIcon>
                                        {
                                            isCartEmpty ?
                                                <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(1522 56)"
                                                    fill="#8bc8d4" stroke="#292929" strokeWidth="2">
                                                    <circle cx="8" cy="8" r="8" stroke="none" />
                                                    <circle cx="8" cy="8" r="7" fill="none" />
                                                </g> : null
                                        }
                                    </CartIcon>
                                </span> : null
                        }
                        <h6
                            className="dropdown-toggle"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onClick={() => setShowButton(!showButton)}
                        >
                            Sign In as:<span className="user_name">{props.name}</span>
                        </h6>
                        {
                            showButton ?
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button" onClick={toggleChangePassword}>Change Password</button>
                                    <button className="dropdown-item" type="button" onClick={onClickLogout}>Logout</button>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderUserDetails;