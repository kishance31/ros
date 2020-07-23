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
            <div className="container-fluid">
                <NavbarComponent
                    dark
                    expand="sm"
                    navLinks={links}
                    classNames="footer"
                />
            </div>
        </footer>
    )
}

export default FooterContainer;