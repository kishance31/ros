import React from 'react';
import NavbarComponent from '../../components/navbar/navbar';
import BasicButtonComponent from '../../components/buttons/basicbutton'

const HeaderContainer = () => {

    const links = [
        { name: "Home", url: "#" },
        { name: "About us", url: "#" },
        { name: "Our services", url: "#" },
        { name: "How it works", url: "#" },
        { name: "Contact us", url: "#" },
    ]

    return (
        <header>
            <NavbarComponent
                color="dark"
                dark
                expand="md"
                logo="logo"
                collapsable
                navLinks={links}
                isOpen={false}
                className="topNavBar"
            >
                <BasicButtonComponent className="fill_btn" >Sign In</BasicButtonComponent>
                <BasicButtonComponent className="fill_btn" >Sign Up</BasicButtonComponent>
            </NavbarComponent>
        </header>
    )
}

export default HeaderContainer;