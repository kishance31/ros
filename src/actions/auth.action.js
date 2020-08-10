export const AuthMap = {
    TOGGLE_SIGN_IN_MODAL: 'toggle_sign_in_modal',
    TOGGLE_SIGN_UP_MODAL: 'toggle_sign_up_modal',
    HIDE_ALL_AUTH_MODAL: 'hide_all_auth_modal',
    TOGGLE_FORGOT_PASSWORD_MODAL : 'toggle_forgot_password',
    TOGGLE_SET_PASSWORD_MODAL: 'toggle_set_password'
    
}

    const AuthModelAction = {
    toggleAuthModals: (type, title) => {
        return { type, payload: { title } };
    },
}

export default AuthModelAction;