import React from 'react';
import NavbarComponent from '../../components/navbar/navbar';
import {headerLinks} from '../../utils/constants';
// import { useActiveLinks } from '../../hooks/activeLinkHook';

const FooterContainer = () => {
    // const headerLinksState = useActiveLinks([...headerLinks]);
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