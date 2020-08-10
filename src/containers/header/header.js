import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthModelAction from '../../actions/auth.action';
import NavbarComponent from '../../components/navbar/navbar';
import AuthModalContainer from '../auth/authModal';
import { HeaderButtons } from './headerButtons';
import { headerLinks } from '../../utils/constants';

import logo from './../../assets/images/logo.svg';

const HeaderContainer = () => {

    const dispatch = useDispatch();

    const toggleModal = (type, title) => {
        dispatch(AuthModelAction.toggleAuthModals(type, title));
    }

    return (
        <header>
            <div className="container-fluid">
                <NavbarComponent
                    color="dark"
                    dark
                    expand="lg"
                    logo={logo}
                    alt="ROS"
                    collapsable
                    navLinks={headerLinks}
                    isOpen={false}
                    mrAuto
                >
                    <HeaderButtons buttonClick={toggleModal} />
                    <AuthModalContainer />
                </NavbarComponent>
            </div>
        </header>
    )
}

export default HeaderContainer;