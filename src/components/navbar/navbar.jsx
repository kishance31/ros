import React, { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler } from "reactstrap";
import NavbarLinksComponent from './navbarLinks';

const NavbarComponent = (props) => {

    const {
        color,
        dark,
        light,
        expand,
        logo,
        collapsable,
        navLinks,
        isOpen
    } = props;

    const [isOpenNav, setIsOpen] = useState(!!isOpen);

    const toggle = () => setIsOpen(!isOpenNav);

    return (
        <div>
            <Navbar color={color || "light"} dark={!!dark} light={!!light} expand={expand}>
                <NavbarBrand href="/">{logo}</NavbarBrand>
                {
                    collapsable ?
                        <>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpenNav} navbar>
                                <NavbarLinksComponent navLinks={navLinks} />
                            </Collapse>
                        </>
                        :
                        <NavbarLinksComponent navLinks={navLinks} />
                }
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
