export const AuthMap = {
    TOGGLE_SIGN_IN_MODAL: 'toggle_sign_in_modal',
    TOGGLE_SIGN_UP_MODAL: 'toggle_sign_up_modal',
    HIDE_ALL_AUTH_MODAL: "hide_all_auth_modal",
}

const AuthModelAction = {
    toggleAuthModals: (type, title) => {
        return { type, payload: { title } };
    },
}

export default AuthModelAction;