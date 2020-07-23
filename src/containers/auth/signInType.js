import React from 'react';
import NavbarLinksComponent from '../../components/navbar/navbarLinks';


const SignInTypes = () => {
    const links = [
        {name: "CORPORATE", url: "javascript:void(0)"},
        {name: "EMPLOYEE", url: "javascript:void(0)"}
    ]

    return (
        <NavbarLinksComponent navLinks={links} />
    )
}

export default SignInTypes;