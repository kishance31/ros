import React from 'react';
import PropTypes from 'prop-types';
import BasicButtonComponent from '../../components/buttons/basicbutton';
import { AuthMap } from '../../actions/auth.action';


const HeaderButtons = props => {

    const {
        buttonClick,
    } = props;

    return (
        <BasicButtonComponent 
            className="custom_btn"
            onButtonClick={() => buttonClick(AuthMap.TOGGLE_SIGN_IN_MODAL, "Sign In With")}
        >
            LOGIN
        </BasicButtonComponent>
    )
}

HeaderButtons.propTypes = {
    buttonClick: PropTypes.func.isRequired,
}

export default HeaderButtons;