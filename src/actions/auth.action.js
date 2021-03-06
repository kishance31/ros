import notificationActions from './notifications.action';
import getServerCore from '../utils/apiUtils';

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
    SIGN_IN_ERROR: 'sign_in_error',
    SIGN_OUT: 'sign_out',
    UPDATE_CORPORATE_PROFILE_START: 'UPDATE_CORPORATE_PROFILE_START',
    UPDATE_CORPORATE_PROFILE_SUCCESS: 'UPDATE_CORPORATE_PROFILE_SUCCESS',
    UPDATE_CORPORATE_PROFILE_ERROR: 'UPDATE_CORPORATE_PROFILE_ERROR',
    UPDATE_EMPLOYEE_PROFILE_START: 'UPDATE_EMPLOYEE_PROFILE_START',
    UPDATE_EMPLOYEE_PROFILE_SUCCESS: 'UPDATE_EMPLOYEE_PROFILE_SUCCESS',
    UPDATE_EMPLOYEE_PROFILE_ERROR: 'UPDATE_EMPLOYEE_PROFILE_ERROR',
    FORGOT_PASSWORD_START: 'FORGOT_PASSWORD_START',
    FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
    FORGOT_PASSWORD_ERROR: 'FORGOT_PASSWORD_ERROR',
    RESET_PASSWORD_START: "RESET_PASSWORD_START",
    RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
    RESET_PASSWORD_ERROR: "RESET_PASSWORD_ERROR",
    TOGGLE_RESET_PASSWORD: 'TOGGLE_RESET_PASSWORD'
}

const AuthModelAction = {
    toggleAuthModals: (type, title, data) => {
        return {
            type,
            payload: {
                title,
                data
            }
        };
    },
    signInUser: (payload) => {
        return {
            type: AuthMap.SIGN_IN_SUCCESS,
            payload
        }
    },
}

const { serverUrls, apiCall } = getServerCore();
const corporateUrl = serverUrls.getCorporateUrl();
const employeeUrl = serverUrls.getEmployeeUrl();
const defaulUrl = serverUrls.getDefaulUrl();

export const signUpUserAsync = (user, toggleOverlay) => {

    return async (dispatch) => {
        try {
            toggleOverlay(true);
            dispatch({
                type: AuthMap.SIGN_UP_START
            });

            let signuprespone = await apiCall({
                url: `${corporateUrl}/register`,
                data: user,
                headers: { "Content-Type": "multipart/form-data" },
                method: 'POST'
            });
            toggleOverlay(false);
            if (signuprespone.response && signuprespone.response.responseCode === 201) {
                dispatch({
                    type: AuthMap.SIGN_UP_SUCCESS
                });
                return dispatch(notificationActions.showNotification({
                    title: 'Sign Up',
                    message: "Sign up successfull.",
                    color: 'success',
                    // duration: 5000,
                }));
            }
            dispatch({
                type: AuthMap.SIGN_UP_ERROR
            })
            if (signuprespone.error) {
                return dispatch(notificationActions.showNotification({
                    title: 'Sign Up',
                    message: signuprespone.error.errors[0].message,
                    color: 'error',
                    // duration: 5000,
                }));
            }

            dispatch(notificationActions.showNotification({
                title: 'Sign Up',
                message: signuprespone.response.responseMessage,
                color: 'error',
                // duration: 5000,
            }));
        } catch (error) {
            toggleOverlay(false);
            dispatch({
                type: AuthMap.SIGN_UP_ERROR
            });
            dispatch(notificationActions.showNotification({
                title: 'Sign Up',
                message: error.message,
                color: 'error',
                // duration: 5000,
            }));
        }
    }
}

export const signInUserAsync = (userBody, type) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: AuthMap.SIGN_IN_START
            });

            let signInUrl = "";
            if (type === "corporate") {
                signInUrl = `${corporateUrl}/login`;
            }
            if (type === "employee") {
                signInUrl = `${employeeUrl}/login`;
            }

            let signInResponce = await apiCall({
                url: signInUrl,
                data: userBody
            });

            if (signInResponce.response && signInResponce.response.responseCode === 200) {
                const { user, tokens } = signInResponce.response.userProfile;
                if (user.isFirstLogin && user.role === "EMPLOYEE") {
                    dispatch(AuthModelAction.toggleAuthModals(
                        AuthMap.TOGGLE_SET_PASSWORD_MODAL,
                        "Set Your Password",
                        tokens
                    ))
                } else {
                    dispatch(AuthModelAction.signInUser({
                        ...signInResponce.response.userProfile.user,
                        tokens: signInResponce.response.userProfile.tokens
                    }))
                }
            } else {
                dispatch({
                    type: AuthMap.SIGN_IN_ERROR
                });
                if (signInResponce.error) {
                    return dispatch(notificationActions.showNotification({
                        title: 'Login In',
                        message: signInResponce.error.errors[0].message,
                        color: 'error',
                        // duration: 5000,
                    }));
                }
                dispatch(notificationActions.showNotification({
                    title: 'Login In',
                    message: signInResponce.response.responseMessage,
                    color: 'error',
                    // duration: 5000,
                }));
            }
        } catch (error) {
            dispatch({
                type: AuthMap.SIGN_IN_ERROR
            });
            dispatch(notificationActions.showNotification({
                title: 'Login In',
                message: error.message,
                color: 'error',
                // duration: 5000,
            }));
        }

    }
}

export const signOutUserAsync = (tokens, role) => {

    return async (dispatch) => {
        try {
            await apiCall({
                url: corporateUrl + (role.indexOf('EMPLOYEE') !== -1 ? "/employee" : "") + "/logout",
                method: 'GET',
                headers: { tokens }
            })

            dispatch({
                type: AuthMap.SIGN_OUT
            });
            return dispatch(notificationActions.showNotification({
                title: 'Logout',
                message: "Logout successfull",
                color: 'success',
                // duration: 5000,
            }));

        } catch (error) {
            dispatch({
                type: AuthMap.SIGN_OUT
            });
            return dispatch(notificationActions.showNotification({
                title: 'Logout',
                message: "Logout successfull",
                color: 'success',
                // duration: 5000,
            }));
        }
    }
}

export const updateUserProfileAsync = (data) => {

    return async (dispatch, getState) => {
        const { auth } = getState();
        try {
            dispatch({
                type: AuthMap.UPDATE_CORPORATE_PROFILE_START
            });
            let updateUserResponse = await apiCall({
                url: `${corporateUrl}/update`,
                data,
                headers: {
                    "Content-Type": "multipart/form-data",
                    tokens: auth.user.tokens
                }
            })
            if (updateUserResponse.response.responseCode === 201) {
                dispatch({
                    type: AuthMap.UPDATE_CORPORATE_PROFILE_SUCCESS,
                    payload: updateUserResponse.response.userProfile,
                })
                return dispatch(notificationActions.showNotification({
                    title: "Update Corporate Profile",
                    message: "Update corporate profile successfully",
                    color: 'success',
                    // duration: 7000,
                }));
            }
            dispatch({
                type: AuthMap.UPDATE_CORPORATE_PROFILE_ERROR,
            })
            return dispatch(notificationActions.showNotification({
                title: "Update Corporate Profile",
                message: "Error Updating corporate profile",
                color: 'error',
                // duration: 7000,
            }));
        } catch (error) {
            dispatch({
                type: AuthMap.UPDATE_CORPORATE_PROFILE_ERROR
            });
            return dispatch(notificationActions.showNotification({
                title: "Update Corporate Profile",
                message: "Error Updating corporate profile",
                color: 'error',
                // duration: 7000,
            }));
        }
    }
}

export const UpdateEmployeeProfile = (data) => {
    return async (dispatch) => {
        try {

            dispatch({
                type: AuthMap.UPDATE_EMPLOYEE_PROFILE_START
            })
            let updateEmployeeResponse = await apiCall({
                url: "",
                headers: {
                    tokens: ""
                },
                data
            })

            if (updateEmployeeResponse.response.responseCode === 201) {
                dispatch({
                    type: AuthMap.UPDATE_EMPLOYEE_PROFILE_SUCCESS,
                    payload: ""
                })
            } else {
                dispatch({
                    type: AuthMap.UPDATE_EMPLOYEE_PROFILE_ERROR
                });
            }
        } catch (error) {
            dispatch({
                type: AuthMap.UPDATE_EMPLOYEE_PROFILE_ERROR
            })
        }
    }
}

export const setPasswordAsync = (data) => {

    return async (dispatch, getState) => {
        try {
            const { auth } = getState();
            let setPasswordResponse = await apiCall({
                url: corporateUrl + "/employee/setPassword",
                // + (role.indexOf('EMPLOYEE') != -1 ? "/employee" : "") + "/setPassword",
                headers: {
                    tokens: auth.tempToken || auth.user.tokens
                },
                data,
            })
            if (setPasswordResponse.response.responseCode === 200) {
                if (setPasswordResponse.response.userProfile) {
                    if (setPasswordResponse.response.userProfile.user.isFirstLogin) {
                        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL, "Sign In With"));
                    } else {
                        dispatch(AuthModelAction.signInUser({
                            ...setPasswordResponse.response.userProfile.user,
                            tokens: setPasswordResponse.response.userProfile.tokens
                        }))
                    }
                } else {
                    dispatch(notificationActions.showNotification({
                        title: 'Password change successfull',
                        message: "Password change successfull. Login again with new password",
                        color: 'success',
                        // duration: 5000,
                    }));
                    dispatch({
                        type: AuthMap.SIGN_OUT
                    });
                    dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL, "Sign In With"));
                }
            }
        } catch (error) {
            dispatch(notificationActions.showNotification({
                title: 'Password change successfull',
                message: "Error setting new password.",
                color: 'error',
                // duration: 5000,
            }));
        }
    }
}

export const resetPasswordAsync = (pswdData) => async (dispatch) => {
    try {
        let setPasswordResponse = await apiCall({
            url: `${corporateUrl}/reset`,
            data: pswdData,
        })
        if (setPasswordResponse.response && setPasswordResponse.response.responseCode === 200) {
            dispatch(notificationActions.showNotification({
                title: 'Reset Password',
                message: "Reset password successfull.",
                color: 'success',
                // duration: 5000,
            }));
            return dispatch({
                type: AuthMap.TOGGLE_SIGN_IN_MODAL,
                payload: "Sign In With"
            });
        } else {
            dispatch(notificationActions.showNotification({
                title: 'Reset Password',
                message: "Reset Password Error. Please try again after sometime",
                color: 'error',
                // duration: 5000,
            }))
        }
    } catch (error) {
        dispatch(notificationActions.showNotification({
            title: 'Reset Password',
            message: "Reset Password Error. Please try again after sometime",
            color: 'error',
            // duration: 5000,
        }));
    }
}

export const forgotPasswordApi = (email) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: AuthMap.FORGOT_PASSWORD_START
            });

            let forgotPasswordResponce = await apiCall({
                url: `${corporateUrl}/forgot_password`,
                data: { email },
                headers: {
                    'Content-Type': "application/json",
                }
            });
            if (forgotPasswordResponce.response && forgotPasswordResponce.response.responseCode === 200) {
                dispatch(notificationActions.showNotification({
                    title: 'Reset Password',
                    message: forgotPasswordResponce.response.responseMessage,
                    color: 'success',
                    // duration: 5000,
                }));
                return dispatch({
                    type: AuthMap.FORGOT_PASSWORD_SUCCESS,
                    payload: {
                        data: forgotPasswordResponce.response,
                        title: "Set Your Password"
                    }
                })
            } else {
                dispatch(notificationActions.showNotification({
                    title: 'Reset Password',
                    message: forgotPasswordResponce.response.responseMessage,
                    color: 'error',
                    // duration: 5000,
                }));
                dispatch({
                    type: AuthMap.FORGOT_PASSWORD_ERROR
                });
                dispatch(
                    AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_FORGOT_PASSWORD_MODAL, 'Forgot Password'))
            }
        } catch (error) {
            dispatch({
                type: AuthMap.FORGOT_PASSWORD_ERROR,
            });
            dispatch(notificationActions.showNotification({
                title: 'Reset Password',
                message: error.message,
                duration: 5000,
                color: 'error',
            }));
        }
    }
}

export const expireTokenLogout = () => (dispatch) => {
    dispatch({
        type: AuthMap.SIGN_OUT
    });
    dispatch(notificationActions.showNotification({
        title: 'Sign Out',
        message: 'Please login again',
        duration: 5000,
        color: 'error',
    }));
}

export const verifyUserToken = async (tokens) => {
    try {
        console.log(defaulUrl)
        let result = await apiCall({
            url: `auth/verifyUserToken`,
            method: "GET",
            headers: {
                tokens,
            }
        });

        console.log(result);
        return result;
    } catch (error) {
        return null;
        // dispatch(expireTokenLogout());
    }
}

export default AuthModelAction;
