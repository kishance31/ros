import axios from 'axios';

export const EmployeeAndLicenseMap = {
    ADD_USER_DATA: 'ADD_USER_DATA',
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
}

export const employeeAndLicenseAction = {
    addEmployeement: (payload) => {
        return {
            type: EmployeeAndLicenseMap.ADD_USER_DATA,
            payload,
        }
    }
}

export const employeeAndLicenseAddAsync = (user) => {

    return async (dispatch, getState) => {
        const state = getState()
        try {
            dispatch({
                type: EmployeeAndLicenseMap.Add_Employeement_START
            });
            let employeeAndLicenseResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/employee/saveEmployee`,
                method: "POST",
                data: user,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    tokens: state.auth.user.tokens
                }
            });
            if (employeeAndLicenseResponse.data.response.responseCode === 200) {
                dispatch({
                    type: EmployeeAndLicenseMap.Add_Employeement_SUCCESS
                })
            }
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Add_Employeement_ERROR
            })
        }
    }
}

export const employeeAndLicenseCountAsync = (id, tokens) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: EmployeeAndLicenseMap.Available_LicenseCount_START
            });
            let employeeAndLicenseResponse = await axios({
                url: `http://127.0.0.1:4000/api/license/total/${id}`,
                method: "GET",
                headers: {
                    tokens
                }
            });
            if (employeeAndLicenseResponse.data.response.responseCode === 200) {
                dispatch({
                    type: EmployeeAndLicenseMap.Available_LicenseCount_SUCCESS,
                    payload: employeeAndLicenseResponse.data.response.availabelLicenseCount
                })
            }
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Available_LicenseCount_ERROR
            })
        }
    }
}

export const getEmployeesAsync = (tokens) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: EmployeeAndLicenseMap.Get_Employees_START
            });
            let getEmployeesResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/employee/getEmployeeList`,
                method: "GET",
                headers: {
                    tokens
                }
            });
            dispatch({
                type: EmployeeAndLicenseMap.Get_Employees_SUCCESS,
                payload: getEmployeesResponse.data.response.data
            })
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Get_Employees_ERROR
            })
        }
    }
}

export const updateDataAsync = (id, tokens) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: EmployeeAndLicenseMap.Update_Employees_START
            });
            let updateEmployeesResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/employee/updateEmployee/${id}`,
                method: "PUT",
                headers: {
                    tokens
                }
            });
            if (updateEmployeesResponse.data.response.responseCode === 200) {
                dispatch({
                    type: EmployeeAndLicenseMap.Update_Employees_SUCCESS,
                })
            }
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Update_Employees_ERROR
            })
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
                url: `http://127.0.0.1:4000/api/corporate-admin/employee/deleteEmployee/${id}`,
                method: "DELETE",
                headers: {
                    tokens
                }
            });
            dispatch({
                type: EmployeeAndLicenseMap.Delete_Employees_SUCCESS
            })
        } catch (error) {
            dispatch({
                type: EmployeeAndLicenseMap.Delete_Employees_ERROR
            })

        }
    }
}

