import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import NavbarComponent from '../../components/navbar/navbar'
import { CorporateNavLinks } from '../../utils/constants';

const CorporateLinksContainer = () => {
  
    const {pathname} = useLocation();
    const {path} = useRouteMatch();

    const currentPath = pathname.split(path)[1] //.split('/')[1];
    let corporateLinks = CorporateNavLinks;
    if(currentPath.length > 1) {
        corporateLinks  = CorporateNavLinks.map(links => {
            if(links.url === pathname) {
                return {
                    ...links,
                    active: true
                }
            }
            return {
                ...links,
                active: false
            }
        })
    }

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