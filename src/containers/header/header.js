import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthModelAction from '../../actions/auth.action';
import NavbarComponent from '../../components/navbar/navbar';
import AuthModalContainer from '../auth/authModal';
import { HeaderButtons } from './headerButtons';
import { headerLinks } from '../../utils/constants';
import logo from './../../assets/images/logo.svg';
import {signOutUserAsync} from '../../actions/auth.action';
const HeaderContainer = () => {

    const[headerButtonVisiable, setHeaderButtonVisiable] = useState(true);
    
    const onClickLogout = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJTaGl2YW5naSIsImxhc3ROYW1lIjoiRHViZXkiLCJ1c2VySWQiOiI1ZjNhNGY3NTg4NmI4MzEzMzUyNzdhYmEiLCJlbWFpbCI6ImFAZ21haWwuY29tIiwicm9sZSI6IkNPUlBPUkFURV9BRE1JTiIsImlhdCI6MTU5NzY2NTgzMiwiZXhwIjoxNjAxODk5NDMyfQ.lEfrzYT2VQG8mn7lgjoz6SappOYWeIHMrlV84Ifof6s";
    dispatch(signOutUserAsync(token))
    }

    const dispatch = useDispatch();

    const toggleModal = (type, title) => {
        dispatch(AuthModelAction.toggleAuthModals(type, title));
        setHeaderButtonVisiable(false)
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
                    headerButtonVisiable
                >
                    { headerButtonVisiable ? <HeaderButtons buttonClick={toggleModal} /> : 
                    <>
                    <h6 className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign In as:
                    <span className="user_name">Richard Geo</span>
                    </h6>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Setting</button>
                        <button className="dropdown-item" type="button" onClick={onClickLogout}>Logout</button>
                    </div>
                    </> }
                    <AuthModalContainer />
                </NavbarComponent>
            </div>
        </header>
    )
}

export default HeaderContainer;