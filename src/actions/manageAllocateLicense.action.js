import axios from 'axios';
import notificationActions from './notifications.action';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const ManageAllocateLicenseMap = {
    Get_AllocateLicense_START: 'Get_AllocateLicense_START',
    Get_AllocateLicense_SUCCESS: 'Get_AllocateLicense_SUCCESS',
    Get_AllocateLicense_ERROR: 'Get_AllocateLicense_ERROR',
    REFRESH_AllocateLicense_LIST: 'REFRESH_AllocateLicense_LIST',
    SET_AllocateLicense_NUMBER: 'SET_AllocateLicense_NUMBER',
    DEACTIVATE_EMPLOYEE_START: 'DEACTIVATE_EMPLOYEE_START',
    DEACTIVATE_EMPLOYEE_SUCCESS: 'DEACTIVATE_EMPLOYEE_SUCCESS',
    DEACTIVATE_EMPLOYEE_ERROR: 'DEACTIVATE_EMPLOYEE_ERROR',
    ACTIVATE_EMPLOYEE_START: 'ACTIVATE_EMPLOYEE_START',
    ACTIVATE_EMPLOYEE_SUCCESS: 'ACTIVATE_EMPLOYEE_SUCCESS',
    ACTIVATE_EMPLOYEE_ERROR: 'ACTIVATE_EMPLOYEE_ERROR',
}

export const ManageAllocateLicenseAction = {
    refreshEmployeeList: () => {
        return {
            type: ManageAllocateLicenseMap.REFRESH_AllocateLicense_LIST
        }
    },
    setBatchNumber: (num) => {
        return {
            type: ManageAllocateLicenseMap.SET_AllocateLicense_NUMBER,
            payload: num,
        }
    },
}

export const getEmployeesAsync = (limit) => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: ManageAllocateLicenseMap.Get_AllocateLicense_START
            });
            const {
                auth: {
                    user: {
                        _id,
                        tokens,
                    }
                }
            } = getState();
            let {data} = await axios({
                url: `${serverUrl}/corporate-admin/employee/getEmployeeByCorporateId/${_id}`,
                method: "POST",
                data: {
                    limit,
                    batch: 0
                },
                headers: {
                    tokens
                }
            });
            if(data.response.responseCode === 200) {
                return dispatch({
                    type: ManageAllocateLicenseMap.Get_AllocateLicense_SUCCESS,
                    payload: {
                        employeeList: data.response.employeeList,
                        totalEmployees: data.response.totalEmployees
                    }
                })
            }
            dispatch({
                type: ManageAllocateLicenseMap.Get_AllocateLicense_ERROR
            })
        } catch (error) {
            dispatch({
                type: ManageAllocateLicenseMap.Get_AllocateLicense_ERROR
            })
        }
    }
}

export const deactivateEmployeeAsync = (msg, id) => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: ManageAllocateLicenseMap.DEACTIVATE_EMPLOYEE_START
            });
            const {
                auth: {
                    user: {
                        tokens,
                    }
                }
            } = getState();
            let {data} = await axios({
                url: `${serverUrl}/corporate-admin/employee/deactivateEmployee/${id}`,
                method: "POST",
                data: {
                    reason: msg
                },
                headers: {
                    tokens,
                    'Content-Type': 'application/json'
                }
            });
            if(data.response.responseCode === 200) {
                dispatch({
                    type: ManageAllocateLicenseMap.DEACTIVATE_EMPLOYEE_SUCCESS,
                });
                return dispatch(notificationActions.showNotification({
                    title: 'Deactivate Employee',
                    message: "Deactivate employee successfull.",
                }))
            }
            dispatch({
                type: ManageAllocateLicenseMap.DEACTIVATE_EMPLOYEE_ERROR
            })
            dispatch(notificationActions.showNotification({
                title: 'Deactivate Employee',
                message: "Deactivate employee error.",
            }))
        } catch (error) {
            dispatch({
                type: ManageAllocateLicenseMap.DEACTIVATE_EMPLOYEE_ERROR
            })
            dispatch(notificationActions.showNotification({
                title: 'Deactivate Employee',
                message: "Deactivate employee error.",
            }))
        }
    }
}

export const activateEmployeeAsync = (id) => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: ManageAllocateLicenseMap.ACTIVATE_EMPLOYEE_START
            });
            const {
                auth: {
                    user: {
                        tokens,
                    }
                }
            } = getState();
            let {data} = await axios({
                url: `${serverUrl}/corporate-admin/employee/activateEmployee/${id}`,
                method: "POST",
                headers: {
                    tokens,
                    'Content-Type': 'application/json'
                }
            });
            if(data.response.responseCode === 200) {
                dispatch({
                    type: ManageAllocateLicenseMap.ACTIVATE_EMPLOYEE_SUCCESS,
                });
                return dispatch(notificationActions.showNotification({
                    title: 'Activate Employee',
                    message: "Activate employee successfull.",
                }))
            }
            dispatch({
                type: ManageAllocateLicenseMap.ACTIVATE_EMPLOYEE_ERROR
            })
            dispatch(notificationActions.showNotification({
                title: 'Activate Employee',
                message: "Activate employee error.",
            }))
        } catch (error) {
            dispatch({
                type: ManageAllocateLicenseMap.ACTIVATE_EMPLOYEE_ERROR
            })
            dispatch(notificationActions.showNotification({
                title: 'Activate Employee',
                message: "Activate employee error.",
            }))
        }
    }
}