import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, Collapse, NavbarToggler } from "reactstrap";
import NavbarLinksComponent from './navbarLinks';

const NavbarComponent = (props) => {

    const {
        color,
        dark,
        light,
        expand,
        logo,
        alt,
        collapsable,
        navLinks,
        isOpen,
        className,
        searchBar,
        otherComponent,
        homepage
    } = props;

    const [isOpenNav, setIsOpen] = useState(!!isOpen);

    const toggle = () => setIsOpen(!isOpenNav);

    return (
        <Navbar color={color || "light"} dark={!!dark} light={!!light} expand={expand || "md"} className={className}>
            {
                collapsable ?
                    <>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpenNav} navbar>
                            <NavbarLinksComponent navLinks={navLinks} />
                            {
                                !homepage ? (
                                    props.children
                                ) : null
                            }
                        </Collapse>
                    </>
                    :
                    <>
                        {
                            navLinks ? (
                                <NavbarLinksComponent navLinks={navLinks} />
                            ) : null
                        }
                        {props.children}
                    </>
            }
            {searchBar || null}
            {otherComponent || null}
        </Navbar>
    );
};

export default NavbarComponent;

NavbarComponent.propTypes = {
    color: PropTypes.string,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    expand: PropTypes.string,
    logo: PropTypes.string,
    alt: PropTypes.string,
    collapsable: PropTypes.bool,
    navLinks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
    })),
    isOpen: PropTypes.bool,
    className: PropTypes.string,
}
