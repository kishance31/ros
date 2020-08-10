import React from 'react';
import NavbarComponent from '../../components/navbar/navbar';
import {headerLinks} from '../../utils/constants';

const FooterContainer = () => {

    return (
        <footer>
            <div className="container-fluid">
                <NavbarComponent
                    dark
                    expand="sm"
                    navLinks={headerLinks}
                    classNames="footer"
                />
            </div>
        </footer>
    )
}

export default FooterContainer;