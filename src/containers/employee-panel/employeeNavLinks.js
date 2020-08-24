import React from 'react';
import NavbarComponent from '../../components/navbar/navbar'
import { EmployeeNavLinks } from '../../utils/constants';
import NavSearchBar from  '../../components/navbar/navSearchBar';
import {useActiveLinks} from '../../hooks/activeLinkHook';

const EmployeeLinksContainer = () => {

    let employeeLinks = useActiveLinks(EmployeeNavLinks);

    return (
        <NavbarComponent
            light={true}
            expand="xl"
            className="dashboard_nav"
            collapsable
            navLinks={employeeLinks}
            isOpen={false}
            searchBar={<NavSearchBar />}
        />
    )
}

export default EmployeeLinksContainer;