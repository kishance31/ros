import React from 'react';
import NavbarComponent from '../../components/navbar/navbar';
import { headerLinks } from '../../utils/constants';
import {NavLink} from 'react-router-dom';
// import { useActiveLinks } from '../../hooks/activeLinkHook';

const FooterContainer = () => {
    // const headerLinksState = useActiveLinks([...headerLinks]);
    return (
        <footer>
            <div className="container-fluid">
                <NavbarComponent
                    dark
                    expand="sm"
                    classNames="footer"
                >
                    <div className="headertitle_and_links">
                        <div className="btn_wrap">
                            <div className="right_side_buttons">
                                <NavLink to="/home"><img src={require(`../../assets/images/home.svg`)} alt="" /></NavLink>
                                <NavLink to="/contactUs"><img src={require(`../../assets/images/call.svg`)} alt="" /></NavLink>
                            </div>
                        </div>
                    </div>
                </NavbarComponent>
            </div>
        </footer>
    )
}

export default FooterContainer;