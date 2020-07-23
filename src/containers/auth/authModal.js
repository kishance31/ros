import React from 'react';
import ModalComponent from '../../components/modal/modal';
import SignInForm from './signInForm';
import { authModalConstants } from '../../utils/constants';

const AuthModalContainer = props => {

    const {
        isModalOpen,
        toggleModal,
        title,
    } = props;

    const modalFooter = () => {
        if (title === authModalConstants.SIGN_IN_TITLE) {
            return (
                <div>
                    Don't have an account yet?
                    SIGN UP
                </div>
            )
        }
        if (title === authModalConstants.SIGN_UP_TITLE) {
            return (
                <div>
                    Already have an account!
                    SIGN IN
                </div>
            )
        }
        return null;
    }

    return (
        <ModalComponent
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            title={title}
            footer={modalFooter()}
            centered
        >
            {
                title === authModalConstants.SIGN_IN_TITLE && <SignInForm />
            }
        </ModalComponent>
    )
}

export default AuthModalContainer;