import { AuthMap } from '../actions/auth.action';

const initialState = {
    modals: {
        showSignInModal: false,
        showSignUpModal: false,
        showForgotPasswordModal: false,
        showSetPasswordModal: false,
        showResetPasswordModal: false,
        title: "",
        openModal: false,
    },
    user: {
        address: [],
        company: {
            branches: []
        },
        companyName: "",
        email: "",
        firstName: "",
        lastName: "",
        licenseDetails: [],
        mobileNo: "",
        officeContactNo: "",
        username: "",
        _id: "",
        tokens: "",
        role: "",
        taxNo: "",
        companyRegisterNo: "",
    },
    tempToken: '',
    resetToken: ''
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
                    showResetPasswordModal: false,
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
                    showResetPasswordModal: false,
                    title: action.payload.title,
                    openModal: true,
                }
            }
        case AuthMap.TOGGLE_RESET_PASSWORD:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showSetPasswordModal: false,
                    showResetPasswordModal: true,
                    title: action.payload.title,
                    openModal: true,
                }
            }
        case AuthMap.RESET_PASSWORD_START:
        case AuthMap.RESET_PASSWORD_SUCCESS:
        case AuthMap.RESET_PASSWORD_ERROR:
        case AuthMap.HIDE_ALL_AUTH_MODAL:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showSetPasswordModal: false,
                    showResetPasswordModal: false,
                    title: "",
                    openModal: false,
                }
            }
        case AuthMap.TOGGLE_FORGOT_PASSWORD_MODAL:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: !state.modals.showForgotPasswordModal,
                    showSetPasswordModal: false,
                    showResetPasswordModal: false,
                    title: action.payload.title,
                    openModal: true,
                }
            }
        case AuthMap.FORGOT_PASSWORD_START:
        case AuthMap.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showResetPasswordModal: false,
                    showSetPasswordModal: false,
                    title: action.payload ? action.payload.title : "",
                    openModal: false,
                },
                resetToken: action.payload && action.payload.data ? action.payload.data.resetToken : ""
            }
        case AuthMap.FORGOT_PASSWORD_ERROR:

        case AuthMap.TOGGLE_SET_PASSWORD_MODAL:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showResetPasswordModal: false,
                    showSetPasswordModal: !state.modals.showSetPasswordModal,
                    title: action.payload ? action.payload.title : "",
                    openModal: true,
                },
                resetToken: action.payload ? action.payload.data : "",
                tempToken: action.payload ? action.payload.data : "",
            }
        case AuthMap.SIGN_UP_START:
            return {
                ...state,
                user: {
                    ...state.user,
                    fetching: true,
                }
            }

        case AuthMap.SIGN_UP_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    fetching: false,
                },
                modals: {
                    showSignInModal: !state.modals.showSignInModal,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showSetPasswordModal: false,
                    showResetPasswordModal: false,
                    title: "Sign In With",
                    openModal: true
                }
            }

        case AuthMap.SIGN_UP_ERROR:
            return {
                ...state,
                user: {
                    ...state.user,
                    fetching: false,
                },
            }

        case AuthMap.SIGN_IN_START:
            return {
                ...state,
                user: {
                    ...state.user
                },
                tempToken: ""
            }

        case AuthMap.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: {
                    ...action.payload
                },
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showResetPasswordModal: false,
                    showSetPasswordModal: false,
                    title: "",
                    openModal: false,
                }
            }

        case AuthMap.SIGN_IN_ERROR:
            return {
                ...state,
                user: {
                    ...state.user
                }
            }
        case AuthMap.SIGN_OUT:
            return {
                ...state,
                user: {
                    ...initialState.user
                }
            }
        case AuthMap.UPDATE_CORPORATE_PROFILE_SUCCESS: {
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
        }
        case AuthMap.UPDATE_EMPLOYEE_PROFILE_SUCCESS: {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default authReducer;