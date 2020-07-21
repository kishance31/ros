import React, { useState } from "react";

import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">logo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Our services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">How it works</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Sign in</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Sign up</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
