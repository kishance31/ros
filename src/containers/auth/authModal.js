import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from '../../components/modal/modal';
import SignInForm from './signInForm';
import SignUpForm from './signUpForm';
import { authModalConstants } from '../../utils/constants';
import FormFooter from '../footer/formFooter';
import AuthModelAction, { AuthMap } from '../../actions/auth.action';


const AuthModalContainer = props => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.HIDE_ALL_AUTH_MODAL));
    }

    const ModalFooter = () => {
        if (auth.modals.showSignInModal) {
            return (
                <div>
                    <FormFooter footertitle="Don't have an account yet?" footerToNavigate="SIGN UP" />
                </div>
            )
        }
        // if (auth.modals.showSignUpModal) {
        //     return (
        //         <div>
        //             <FormFooter footertitle="Already have an account!" footerToNavigate="SIGN IN" />
        //             <div class="modal-footer">
        //                 <h5 class="footer_title"> Already have an account!</h5>
        //                 <span class="navbar-text">
        //                     <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#SigninModalCenter">SIGN IN</a>
        //                 </span>
        //             </div>
        //         </div>
        //     )
        // }
        return null;
    }

    return (
        <ModalComponent
            isOpen={auth.modals.openModal}
            toggleModal={toggleModal}
            title={auth.modals.title}
            footer={ModalFooter()}
            centered
        >
            {
                auth.modals.showSignInModal ? <SignInForm /> : null
            }
            {
                auth.modals.showSignUpModal ? <SignUpForm /> : null
            }
        </ModalComponent>


    )
}

export default AuthModalContainer;
