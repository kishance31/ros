import React, {useState} from 'react';
import NavbarComponent from '../../components/navbar/navbar';
import AuthModalContainer from '../auth/authModal';
import {HeaderButtons} from './headerButtons';
import {headerLinks} from '../../utils/headerLinks';

import logo from './../../assets/images/logo.svg';

const HeaderContainer = () => {

    const [isModalOpen, toggleIsModalOpen] = useState(false);
    const [authModalTitle, setAuthModalTitle] = useState("Sign In");

    const toggleModal = (title) => {
        typeof title === "string" && setAuthModalTitle(title);
        toggleIsModalOpen(!isModalOpen);
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
                >
                    <HeaderButtons buttonClick={toggleModal}/>
                    <AuthModalContainer
                        isModalOpen={isModalOpen}
                        toggleModal={toggleModal}
                        title={authModalTitle}
                    />
                </NavbarComponent>
            </div>
        </header>
    )
}

export default HeaderContainer;