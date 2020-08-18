import axios from 'axios';
import notificationActions from './notifications.action';

export const AuthMap = {
    TOGGLE_SIGN_IN_MODAL: 'toggle_sign_in_modal',
    TOGGLE_SIGN_UP_MODAL: 'toggle_sign_up_modal',
    HIDE_ALL_AUTH_MODAL: 'hide_all_auth_modal',
    TOGGLE_FORGOT_PASSWORD_MODAL: 'toggle_forgot_password',
    TOGGLE_SET_PASSWORD_MODAL: 'toggle_set_password',
    SIGN_UP_START: 'sign_up_start',
    SIGN_IN_START: 'sign_in_start',
    SIGN_UP_SUCCESS: 'sign_up_success',
    SIGN_UP_ERROR: 'sign_up_error',
    SIGN_IN_SUCCESS: 'sign_in_success',
    SIGN_IN_ERROR: 'sign_in_error'
}

const AuthModelAction = {
    toggleAuthModals: (type, title) => {
        return {
            type,
            payload: {
                title
            }
        };
    },
    signInUser: (payload) => {
        return {
            type: AuthMap.SIGN_IN_SUCCESS,
            payload
        }
    }
}

export const signUpUserAsync = (user) => {
    return async (dispatch) => {

        dispatch({
            type: AuthMap.SIGN_UP_START
        });
        let signuprespone = await axios({
            url: `http://127.0.0.1:4000/api/corporate-admin/register`,
            method: "POST",
            data: user,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        if (signuprespone.status === 200) {
            dispatch({
                type: AuthMap.SIGN_UP_SUCCESS
            })
        } else {
            dispatch({
                type: AuthMap.SIGN_UP_ERROR
            })
        }
    }
}

export const signInUserAsync = (userBody) => {

    return async (dispatch) => {

        dispatch({
            type: AuthMap.SIGN_IN_START
        });

        let signInResponce = await axios({
            url: `http://127.0.0.1:4000/api/corporate-admin/login`,
            method: "POST",
            data: userBody,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (signInResponce.data.response.responseCode === 200) {
            dispatch(AuthModelAction.signInUser({
                ...signInResponce.data.response.userProfile.user,
                tokens: signInResponce.data.response.userProfile.tokens
            }))
        } else {
            dispatch({
                type: AuthMap.SIGN_IN_ERROR
            });
            dispatch(notificationActions.showNotification({
                title: 'Login In',
                message: signInResponce.data.response.responseMessage,
                // duration: 5000,
            }));
        }

    }
}


export default AuthModelAction;