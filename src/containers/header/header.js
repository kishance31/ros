import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthModelAction from '../../actions/auth.action';
import NavbarComponent from '../../components/navbar/navbar';
import AuthModalContainer from '../auth/authModal';
import HeaderButtons from './headerButtons';
import HeaderUserDetails from './headerUserDetails';
import { headerLinks } from '../../utils/constants';
import logo from './../../assets/images/logo.png';
import { useActiveLinks } from '../../hooks/activeLinkHook';

const HeaderContainer = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const headerLinksState = useActiveLinks(
        user.tokens && user._id && user.role ?
            headerLinks.filter(link => link.private) :
            headerLinks.filter(link => !link.private)
    );

    const toggleModal = (type, title) => {
        dispatch(AuthModelAction.toggleAuthModals(type, title));
    }
    return (
        <header className="header fixed" data-aos="fade-down">
            <div className="container-fluid">
                <NavbarComponent
                    color="light"
                    dark
                    expand="lg"
                    logo={logo}
                    alt="ROS"
                    collapsable={!user.tokens && !user.role && !user._id ? true : false}
                    navLinks={headerLinksState}
                    isOpen={false}
                    mrAuto
                    headerButtonVisiable
                >
                    {
                        !user.tokens && !user.role && !user._id ?
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