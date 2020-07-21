import React from 'react';
import NavbarComponent from '../../components/navbar/navbar';
import BasicButtonComponent from '../../components/buttons/basicbutton'

const NavbarContainer = () => {

    const links = [
        {name: "Home", url: "#"},
        {name: "About us", url: "#"},
        {name: "Our services", url: "#"},
        {name: "How it works", url: "#"},
        {name: "Contact us", url: "#"},
    ]

    return (
        <NavbarComponent
            color="dark"
            dark
            expand="md"
            logo="logo"
            collapsable
            navLinks={links}
            isOpen={false}
        >
            <BasicButtonComponent>Sign In</BasicButtonComponent>
            <BasicButtonComponent>Sign Up</BasicButtonComponent>
        </NavbarComponent>
    )
}

export default NavbarContainer;