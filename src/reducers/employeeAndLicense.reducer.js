import { EmployeeAndLicenseMap } from '../actions/employeeAndLicense.action';

const initialState = {
    addEmployeeList: [],
    availabelLicenseCount: {},
    getEmployeeList: [],
    updateEmployee: [],
    deleteEmployee: [],
    refreshEmployee: true,
}

const employeeAndLicenseReducer = (state = initialState, action) => {

    switch (action.type) {
        case EmployeeAndLicenseMap.ADD_USER_DATA: {
            return {
                ...state,
                addEmployeeList: [
                    ...state.addEmployeeList,
                    { ...action.payload }
                ]
            }
        } case EmployeeAndLicenseMap.Available_LicenseCount_SUCCESS: {
            return {
                ...state,
                availabelLicenseCount: action.payload,
            }
        } case EmployeeAndLicenseMap.Get_Employees_SUCCESS: {
            return {
                ...state,
                getEmployeeList: action.payload,
                refreshEmployee: false
            }
        } case EmployeeAndLicenseMap.Update_Employees_SUCCESS: {
            return {
                ...state,
                updateEmployee: action.payload
            }
        }
        case EmployeeAndLicenseMap.Delete_Employees_SUCCESS: {
            return {
                ...state,
                refreshEmployee: true
            }
        }
        default:
            return { ...state }
    }
}

export default employeeAndLicenseReducer;
