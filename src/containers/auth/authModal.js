import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from '../../components/modal/modal';
import SignInForm from './signInForm';
import SignUpForm from './signUpForm';
import ForgotPassword from './forgotPassword';
import ResetPassword from './resetPassword';
import AuthModelAction, { AuthMap } from '../../actions/auth.action';
import SetYourPassword from './setYourPassword';
import { OverlayContext } from '../../context/loadingOverlay.context';
import { MetroCancelIcon } from '../../components/icons/Icons';

const AuthModalContainer = props => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const { toggleOverlay } = useContext(OverlayContext);

    const toggleModal = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.HIDE_ALL_AUTH_MODAL));
    }
    const ModalCloseIcon = () => (
        <button type="button" className="close close_icon ml-auto" data-dismiss="modal"
            aria-label="Close" onClick={toggleModal} >
            <span aria-hidden="true"><MetroCancelIcon /></span>
        </button>
    )

    return (
        <ModalComponent
            isOpen={auth.modals.openModal}
            toggleModal={toggleModal}
            closeIcon={<ModalCloseIcon />}
            title={auth.modals.title}
            centered
            className="homepage"
        >
            {
                auth.modals.showSignInModal ? <SignInForm /> : null
            }
            {
                auth.modals.showSignUpModal ? <SignUpForm toggleOverlay={toggleOverlay} /> : null
            }
            {
                auth.modals.showForgotPasswordModal ? <ForgotPassword /> : null
            }
            {
                auth.modals.showSetPasswordModal ? <SetYourPassword /> : null
            }
            {
                auth.modals.showResetPasswordModal ? <ResetPassword /> : null
            }
        </ModalComponent>
    )
}

export default AuthModalContainer;