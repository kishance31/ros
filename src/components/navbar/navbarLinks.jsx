import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

const NavbarLinksComponent = (props) => {
    const {navLinks} = props;
    return (
        <Nav navbar>
            {navLinks && navLinks.map((link, i) => (
                <NavItem key={i}>
                    <NavLink href={link.url} >{link.name}</NavLink>
                </NavItem>
            ))}
        </Nav>
    )
}

export default NavbarLinksComponent;