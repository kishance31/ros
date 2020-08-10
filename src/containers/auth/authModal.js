import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from '../../components/modal/modal';
import SignInForm from './signInForm';
import SignUpForm from './signUpForm';
import ForgotPassword from './forgotPassword';
import { authModalConstants } from '../../utils/constants';
import FormFooter from '../footer/formFooter';
import AuthModelAction, { AuthMap } from '../../actions/auth.action';
import SetYourPassword from './setYourPassword';



const AuthModalContainer = props => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.HIDE_ALL_AUTH_MODAL));
    }

    return (
        <ModalComponent
            isOpen={auth.modals.openModal}
            toggleModal={toggleModal}
            title={auth.modals.title}
            centered
        >
            {
                auth.modals.showSignInModal ? <SignInForm /> : null
            }
            {
                auth.modals.showSignUpModal ? <SignUpForm /> : null
            }
            {
                auth.modals.showForgotPasswordModal ? <ForgotPassword /> : null
            }
            {
                auth.modals.showSetPasswordModal ? <SetYourPassword/> : null
            }
            
        </ModalComponent>


    )
}

export default AuthModalContainer;
