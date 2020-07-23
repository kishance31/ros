import React from 'react';
import NavbarLinksComponent from '../../components/navbar/navbarLinks';


const SignInTypes = () => {
    const links = [
        {name: "CORPORATE", url: ""},
        {name: "EMPLOYEE", url: ""}
    ]

    return (
        <NavbarLinksComponent navLinks={links} />
    )
}

export default SignInTypes;