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
            <div className="container-fluid">
                <NavbarComponent
                    color="dark"
                    dark
                    expand="lg"
                    logo="logo"
                    collapsable
                    navLinks={links}
                    isOpen={false}
                    className="topNavBar"
                >

                    <div className="btn_wrap">
                        <BasicButtonComponent className="fill_btn" >SIGN IN</BasicButtonComponent>
                        <BasicButtonComponent className="fill_btn" >SIGN UP</BasicButtonComponent>
                    </div>
                </NavbarComponent>
            </div>
        </header>
    )
}

export default HeaderContainer;