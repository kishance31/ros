import React from 'react';
import NavbarComponent from '../../components/navbar/navbar'
import { CorporateNavLinks } from '../../utils/constants';
import {useActiveLinks} from '../../hooks/activeLinkHook';

const CorporateLinksContainer = () => {
  
    let corporateLinks = useActiveLinks(CorporateNavLinks);

    return (
        <NavbarComponent 
            light={true}
            expand="xl"
            className="dashboard_nav"
            collapsable
            navLinks={corporateLinks}
            isOpen={false}
        />
    )
}

export default CorporateLinksContainer;