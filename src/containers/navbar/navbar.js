import React from 'react';
import NavbarComponent from '../../components/navbar/navbar';

const NavbarContainer = () => {

    const links = [
        {name: "Home", url: "#"},
        {name: "About us", url: "#"},
        {name: "Our services", url: "#"},
        {name: "How it works", url: "#"},
        {name: "Contact us", url: "#"},
        {name: "Sign In", url: "#"},
        {name: "Sign up", url: "#"},
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
            
        </NavbarComponent>
    )
}

export default NavbarContainer;