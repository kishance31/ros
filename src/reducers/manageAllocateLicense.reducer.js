import { ManageAllocateLicenseMap } from '../actions/manageAllocateLicense.action';

const initialState = {
    getEmployeeList: [],
    refreshEmployee: true,
    totalEmployeesCount: 0,
    batchNumber: 1,
}

const ManageAllocateLicenseReducer = (state = initialState, action) => {

    switch (action.type) {
        case ManageAllocateLicenseMap.Get_AllocateLicense_SUCCESS: {
            return {
                ...state,
                getEmployeeList: action.payload.employeeList,
                totalEmployeesCount: action.payload.totalEmployees,
                refreshEmployee: false
            }
        }
        case ManageAllocateLicenseMap.Get_AllocateLicense_ERROR: {
            return {
                ...state,
                refreshEmployee: false
            }
        }
        case ManageAllocateLicenseMap.REFRESH_AllocateLicense_LIST: {
            return {
                ...state,
                refreshEmployee: true
            }
        }
        case ManageAllocateLicenseMap.SET_AllocateLicense_NUMBER: {
            return {
                ...state,
                batchNumber: action.payload
            }
        }
        default:
            return { ...state }
    }
}

export default ManageAllocateLicenseReducer;
