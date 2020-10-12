import axios from 'axios';
import notificationActions from './notifications.action';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const EmployeeAndLicenseMap = {
    Add_Employeement_START: 'add_employeement_start',
    Add_Employeement_SUCCESS: 'add_employeement_success',
    Add_Employeement_ERROR: 'add_employeement_error',
    Available_LicenseCount_START: 'available_licenseCount_start',
    Available_LicenseCount_SUCCESS: 'available_licenseCount_success',
    Available_LicenseCount_ERROR: 'available_licenseCount_error',
    Get_Employees_START: 'get_employees_start',
    Get_Employees_SUCCESS: 'get_employees_success',
    Get_Employees_ERROR: 'get_employees_error',
    Update_Employees_START: 'update_employees_start',
    Update_Employees_SUCCESS: 'update_employees_success',
    Update_Employees_ERROR: 'update_employees_error',
    Delete_Employees_START: 'delete_employees_start',
    Delete_Employees_SUCCESS: 'delete_employees_success',
    Delete_Employees_ERROR: 'delete_employees_error',
    REFRESH_EMPLOYEE_LIST: 'REFRESH_EMPLOYEE_LIST',
    GET_BRANCH_NAMES: 'GET_BRANCH_NAMES',
    REFRESH_BRANCH_NAMES: 'REFRESH_BRANCH_NAMES',
    SET_EMPLOYEE_BATCH_NUMBER: 'SET_EMPLOYEE_BATCH_NUMBER',
}

const employeeAndLicenseAction = {
    refreshEmployeeList: () => {
        return {
            type: EmployeeAndLicenseMap.REFRESH_EMPLOYEE_LIST
        }
    },
    refreshBranchNames: () => {
        return {
            type: EmployeeAndLicenseMap.REFRESH_BRANCH_NAMES
        }
    },
    setBatchNumber: (num) => {
        return {
            type: EmployeeAndLicenseMap.SET_EMPLOYEE_BATCH_NUMBER,
            payload: num,
        }
    },
}

export default employeeAndLicenseAction;

export const employeeAndLicenseAddAsync = (user) => {
    return async (dispatch, getState) => {
        const { auth } = getState()
        try {
            dispatch({
                type: EmployeeAndLicenseMap.Add_Employeement_START
            });
            let { data } = await axios({
                url: `${serverUrl}/corporate-admin/employee/saveEmployee`,
                method: "POST",
                data: user,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    tokens: auth.user.tokens
                }
            });
            if (data.response && data.response.responseCode === 200) {
                dispatch(employeeAndLicenseCountAsync(auth.user._id, auth.user.tokens));
                dispatch({
                    type: EmployeeAndLicenseMap.Add_Employeement_SUCCESS
                })
            }
            dispatch(notificationActions.showNotification({
                title: "Added Employee",
                message: data.response.responseMessage,
                // duration: 7000,
            }));
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Add_Employeement_ERROR
            })
        }
    }
}

export const employeeAndLicenseCountAsync = (id, tokens) => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: EmployeeAndLicenseMap.Available_LicenseCount_START
            });
            let { data } = await axios({
                url: `${serverUrl}/license/total/${id}`,
                method: "GET",
                headers: {
                    tokens
                }
            });
            if (data.response && data.response.responseCode === 200) {
                const { availableLicenseList } = getState().purchaseLicense;
                let licenseCount = {};
                availableLicenseList.forEach(license => {
                    licenseCount[license.type] = 0;
                })
                dispatch({
                    type: EmployeeAndLicenseMap.Available_LicenseCount_SUCCESS,
                    payload: { ...licenseCount, ...data.response.availabelLicenseCount }
                })
            }
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Available_LicenseCount_ERROR
            })
        }
    }
}

export const getEmployeesAsync = (tokens, id, limit, batch) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: EmployeeAndLicenseMap.Get_Employees_START
            });
            let getEmployeesResponse = await axios({
                url: `${serverUrl}/corporate-admin/employee/getEmployeeByCorporateId/${id}`,
                method: "POST",
                data: {
                    limit,
                    batch: batch - 1
                },
                headers: {
                    tokens
                }
            });
            dispatch({
                type: EmployeeAndLicenseMap.Get_Employees_SUCCESS,
                payload: {
                    employeeList: getEmployeesResponse.data.response.employeeList,
                    totalEmployees: getEmployeesResponse.data.response.totalEmployees
                }
            })
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Get_Employees_ERROR
            })
        }
    }
}

export const updateEmployeeAsync = (user, id) => {

    return async (dispatch, getState) => {
        try {
            const { auth } = getState();
            let { data } = await axios({
                url: `${serverUrl}/corporate-admin/employee/updateEmployee/${id}`,
                method: "PUT",
                data: user,
                headers: {
                    tokens: auth.user.tokens
                }
            });
            if (data.response && data.response.responseCode === 200) {
                dispatch(employeeAndLicenseCountAsync(auth.user._id, auth.user.tokens));
                dispatch({
                    type: EmployeeAndLicenseMap.Add_Employeement_SUCCESS
                })
                dispatch(notificationActions.showNotification({
                    title: "Update Employee",
                    message: data.response.responseMessage,
                    // duration: 7000,
                }));
            }
        } catch (error) {
            dispatch(notificationActions.showNotification({
                title: "Update Employee",
                message: error.message,
                // duration: 7000,
            }));
        }
    }
}

export const deleteDataAsync = (id, tokens) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: EmployeeAndLicenseMap.Delete_Employees_START
            });
            let deleteEmployeesResponse = await axios({
                url: `${serverUrl}/corporate-admin/employee/deleteEmployee/${id}`,
                method: "DELETE",
                headers: {
                    tokens
                }
            });
            if (deleteEmployeesResponse.data.response.responseCode === 200) {
                return dispatch({
                    type: EmployeeAndLicenseMap.Delete_Employees_SUCCESS
                });
            }
            dispatch({
                type: EmployeeAndLicenseMap.Delete_Employees_ERROR
            });
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Delete_Employees_ERROR
            })

        }
    }
}

export const getBranchNamesAsync = (id, tokens) => {
    return async (dispatch) => {
        try {
            let { data } = await axios({
                url: `${serverUrl}/branch/getCorporateBranchNames/${id}`,
                method: "GET",
                headers: {
                    tokens
                }
            });
            if (data.response.responseCode === 200) {
                dispatch({
                    type: EmployeeAndLicenseMap.GET_BRANCH_NAMES,
                    payload: data.response.data
                })
            }
        } catch (error) {

        }
    }
}
