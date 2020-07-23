import React from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem, NavLink} from 'reactstrap';

const NavbarLinksComponent = (props) => {
    const {navLinks} = props;
    return (
        <Nav navbar className="mr-auto">
            {navLinks && navLinks.map((link, i) => (
                <NavItem key={i}>
                    <NavLink href={link.url} >{link.name}</NavLink>
                </NavItem>
            ))}
        </Nav>
    )
}

export default NavbarLinksComponent;

NavbarLinksComponent.propTypes = {
    navLinks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string
    }))
}
