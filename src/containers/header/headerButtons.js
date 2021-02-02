import React from 'react';
import PropTypes from 'prop-types';
import { NavbarBrand } from "reactstrap";
import { AuthMap } from '../../actions/auth.action';
import {NavLink} from 'react-router-dom';


const HeaderButtons = props => {

    const {
        buttonClick,
        logo,
        alt
    } = props;

    return (
        // <BasicButtonComponent 
        //     className="custom_btn"
        //     onButtonClick={() => buttonClick(AuthMap.TOGGLE_SIGN_IN_MODAL, "Sign In With")}
        // >
        //     LOGIN
        // </BasicButtonComponent>

        <div className="headertitle_and_links">
            {
                logo &&
                <NavbarBrand href="/">
                    <img src={logo} alt={alt} className="logo logo img-fluid" />
                </NavbarBrand>
            }

            <div className="title">Remote Office Solution</div>
            <div className="btn_wrap">
                <div className="right_side_buttons">
                    <NavLink to="/home"><img src={require(`../../assets/images/home.svg`)} alt="" /></NavLink>
                    <NavLink to="/contactUs"><img src={require(`../../assets/images/call.svg`)} alt="" /></NavLink>
                    <a href="#"><img src={require(`../../assets/images/login.svg`)} alt=""
                        onClick={() => buttonClick(AuthMap.TOGGLE_SIGN_IN_MODAL, "Sign In With")}
                    /></a>
                </div>
            </div>
        </div>
    )
}

HeaderButtons.propTypes = {
    buttonClick: PropTypes.func.isRequired,
}

export default HeaderButtons;