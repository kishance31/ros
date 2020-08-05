import React from 'react';
import ModalComponent from '../../components/modal/modal';
import SignInForm from './signInForm';
import SignUpForm from './signUpForm';
import { authModalConstants } from '../../utils/constants';
//import { ModalFooter } from 'reactstrap';

const AuthModalContainer = props => {

    const {
        isModalOpen,
        toggleModal,
        title,
    } = props;

    const ModalFooter = () => {
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
                <div class="modal-footer">
                    <h5 class="footer_title"> Already have an account!</h5>
                    <span class="navbar-text"> 
                        <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#SigninModalCenter">SIGN IN</a> 
                    </span>
                </div>
            )
        }
        return null;
    }
  
    return (
        <ModalComponent
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            // title={title}
            // footer={modalFooter()}
            centered
        >
            {
                title === authModalConstants.SIGN_IN_TITLE && <SignInForm />
            }
            {
                title === authModalConstants.SIGN_UP_TITLE && <SignUpForm />
            }

        </ModalComponent>
        
       
    )
}

export default AuthModalContainer;
