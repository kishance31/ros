import { AuthMap } from '../../actions/auth.action';

const initialState = {
    modals: {
        showSignInModal: false,
        showSignUpModal: false,
        showForgotPasswordModal: false,
        showSetPasswordModal: false,
        title: "",
        openModal: false,
    },
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthMap.TOGGLE_SIGN_IN_MODAL:
            return {
                ...state,
                modals: {
                    showSignInModal: !state.modals.showSignInModal,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showSetPasswordModal: false,
                    title: action.payload.title,
                    openModal: true
                }
            }

        case AuthMap.TOGGLE_SIGN_UP_MODAL:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: !state.modals.showSignUpModal,
                    showForgotPasswordModal: false,
                    showSetPasswordModal: false,
                    title: action.payload.title,
                    openModal: true,
                }
            }

        case AuthMap.HIDE_ALL_AUTH_MODAL:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showSetPasswordModal: false,
                    title: "",
                    openModal: false,
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer;