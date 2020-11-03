import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactUs from './contactUs';
import Homepage from './Homepage';
import FooterContainer from '../../containers/footer/footer';
// import { useActiveLinks } from '../../hooks/activeLinkHook';
// import { headerLinks } from '../../utils/constants';

const HomePageRoutes = () => {
    // const headerLinksState = useActiveLinks(headerLinks);
    return (
        <>
            <Switch>
                <Route path="/home" component={Homepage} />
                <Route path="/contactUs" component={ContactUs} />
            </Switch>
            <FooterContainer />
        </>
    )
}

export default HomePageRoutes;