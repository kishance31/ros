import { AuthMap } from '../actions/auth.action';

const initialState = {
    modals: {
        showSignInModal: false,
        showSignUpModal: false,
        showForgotPasswordModal: false,
        showSetPasswordModal: false,
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
        tokens: ""
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
        case AuthMap.TOGGLE_FORGOT_PASSWORD_MODAL:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: !state.modals.showForgotPasswordModal,
                    showSetPasswordModal: false,
                    title: action.payload.title,
                    openModal: true,
                }
            }

        case AuthMap.TOGGLE_SET_PASSWORD_MODAL:
            return {
                ...state,
                modals: {
                    showSignInModal: false,
                    showSignUpModal: false,
                    showForgotPasswordModal: false,
                    showSetPasswordModal: !state.modals.showSetPasswordModal,
                    title: action.payload.title,
                    openModal: true,
                }
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
                }
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
                    tokens: ""
                }
            }
        default:
            return {
                ...state,
                
            }
    }
}

export default authReducer;