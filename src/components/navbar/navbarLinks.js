import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';

const NavbarLinksComponent = (props) => {
    const {navLinks, mrAuto} = props;
    return (
        <Nav navbar className={mrAuto ? "mr-auto" : ""}>
            {navLinks && navLinks.map((link, i) => (
                <NavItem key={i} active={link.active ? true : false}>
                    <NavLink to={link.url} className="nav-link" >{link.name}</NavLink>
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
