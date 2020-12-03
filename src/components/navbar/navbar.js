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
        otherComponent
    } = props;

    const [isOpenNav, setIsOpen] = useState(!!isOpen);

    const toggle = () => setIsOpen(!isOpenNav);

    return (
        <Navbar color={color || "light"} dark={!!dark} light={!!light} expand={expand || "md"} className={className}>
            <div className="headertitle_and_links">
                {
                    logo &&
                    <NavbarBrand href="/">
                        <img src={logo} alt={alt} className="logo logo img-fluid" />
                    </NavbarBrand>
                }

                <div className="title">Remote Office Solutions</div>
                <div className="btn_wrap">
                    <div class="right_side_buttons">
                        <a href=""><img src={require(`../../assets/images/home.svg`)} alt="" /></a>
                        <a href=""><img src={require(`../../assets/images/call.svg`)} alt="" /></a>
                        <a href=""><img src={require(`../../assets/images/login.svg`)} alt="" /></a>
                    </div>
                </div>
            </div>


            {
                collapsable ?
                    <>
                        {/* <NavbarToggler onClick={toggle} /> */}
                        {/* <Collapse isOpen={isOpenNav} navbar> */}
                        {/* <NavbarLinksComponent navLinks={navLinks} /> */}
                        {/* {props.children} */}
                        {/* </Collapse> */}
                    </>
                    :
                    <>
                        {/* <NavbarLinksComponent navLinks={navLinks} />
                        {props.children} */}
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
