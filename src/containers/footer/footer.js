import React from 'react';
import NavbarComponent from '../../components/navbar/navbar';

const FooterContainer = () => {
    const links = [
        { name: "Home", url: "#" },
        { name: "About us", url: "#" },
        { name: "Our services", url: "#" },
        { name: "How it works", url: "#" },
        { name: "Contact us", url: "#" },
    ]

    return (
        <footer>
            <NavbarComponent
                color="light"
                light
                expand="md"
                navLinks={links}
                classNames="footer"
            />
        </footer>
    )
}

export default FooterContainer;