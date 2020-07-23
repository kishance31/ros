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
        isOpen,
        className
    } = props;

    const [isOpenNav, setIsOpen] = useState(!!isOpen);

    const toggle = () => setIsOpen(!isOpenNav);

    return (
        <Navbar color={color || "light"} dark={!!dark} light={!!light} expand={expand || "md"} className={className}>
            {logo ? <NavbarBrand href="/">
                <img src={require(`../../images/logo.svg`)} />
            </NavbarBrand> : null}
            {
                collapsable ?
                    <>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpenNav} navbar>
                            <NavbarLinksComponent navLinks={navLinks} />
                            {props.children}
                        </Collapse>
                    </>
                    :
                    <>
                        <NavbarLinksComponent navLinks={navLinks} />
                        {props.children}
                    </>
            }

        </Navbar>
    );
};

export default NavbarComponent;
