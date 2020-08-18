import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AuthModelAction from '../../actions/auth.action';
import NavbarComponent from '../../components/navbar/navbar';
import AuthModalContainer from '../auth/authModal';
import HeaderButtons from './headerButtons';
import HeaderUserDetails from './headerUserDetails';
import { headerLinks } from '../../utils/constants';
import logo from './../../assets/images/logo.svg';
import {signOutUserAsync} from '../../actions/auth.action';

const HeaderContainer = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const toggleModal = (type, title) => {
        dispatch(AuthModelAction.toggleAuthModals(type, title));
    }
    return (
        <header className="header fixed" data-aos="fade-down">
            <div className="container-fluid">
                <NavbarComponent
                    color="dark"
                    dark
                    expand="lg"
                    logo={logo}
                    alt="ROS"
                    collapsable={user.tokens ? false : true}
                    navLinks={!user.tokens ? headerLinks : []}
                    isOpen={false}
                    mrAuto
                    headerButtonVisiable
                >
                    {
                        !user.tokens ?
                            <HeaderButtons buttonClick={toggleModal} /> :
                            <HeaderUserDetails name={`${user.firstName} ${user.lastName}`} />
                    }
                    <AuthModalContainer />
                </NavbarComponent>
            </div>
        </header>
    )
}

export default HeaderContainer;