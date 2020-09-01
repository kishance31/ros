import { EmployeeAndLicenseMap } from '../actions/employeeAndLicense.action';

const initialState = {
    availabelLicenseCount: {},
    getEmployeeList: [],
    deleteEmployee: [],
    refreshEmployee: true,
    totalEmployeesCount: 0,
    branchNames: [],
    refreshBranchNames: true,
    batchNumber: 1,
}

const employeeAndLicenseReducer = (state = initialState, action) => {

    switch (action.type) {
        case EmployeeAndLicenseMap.Available_LicenseCount_SUCCESS: {
            return {
                ...state,
                availabelLicenseCount: action.payload,
            }
        }
        case EmployeeAndLicenseMap.Add_Employeement_SUCCESS: {
            return {
                ...state,
                refreshEmployee: true,
            }
        }
        case EmployeeAndLicenseMap.Get_Employees_SUCCESS: {
            return {
                ...state,
                getEmployeeList: action.payload.employeeList,
                totalEmployeesCount: action.payload.totalEmployees,
                refreshEmployee: false
            }
        }
        case EmployeeAndLicenseMap.Get_Employees_ERROR: {
            return {
                ...state,
                refreshEmployee: false
            }
        }
        case EmployeeAndLicenseMap.Delete_Employees_SUCCESS: {
            return {
                ...state,
                refreshEmployee: true
            }
        }
        case EmployeeAndLicenseMap.REFRESH_EMPLOYEE_LIST: {
            return {
                ...state,
                refreshEmployee: true
            }
        }
        case EmployeeAndLicenseMap.GET_BRANCH_NAMES: {
            return {
                ...state,
                branchNames: action.payload,
                refreshBranchNames: false
            }
        }
        case EmployeeAndLicenseMap.REFRESH_BRANCH_NAMES: {
            return {
                ...state,
                refreshBranchNames: true
            }
        }
        case EmployeeAndLicenseMap.SET_EMPLOYEE_BATCH_NUMBER: {
            return {
                ...state,
                batchNumber: action.payload
            }
        }
        default:
            return { ...state }
    }
}

export default employeeAndLicenseReducer;
