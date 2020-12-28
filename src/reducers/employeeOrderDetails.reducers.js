import { EmployeeOrderDetailsMap } from '../actions/employeeOrderDetails.action';

const initState = {
    orderDetails: [],
    totalRecords: 0,
    refreshList: true,
    isLoading: false,
    batchNumber: 1,
    employeeNames: [],
}

const employeeOrderDetailsReducer = (state = initState, action) => {
    switch (action.type) {
        case EmployeeOrderDetailsMap.GET_ORDERDETAILS_SUCCESS: {
            return {
                ...state,
                orderDetails: action.payload.list,
                totalRecords: action.payload.totalRecords,
                refreshList: false,
            }
        }
        case EmployeeOrderDetailsMap.GET_ORDERDETAILS_ERROR: {
            return {
                ...state,
                refreshList: false,
            }
        }
        case EmployeeOrderDetailsMap.REFRESH_ORDERDETAILS_LIST: {
            return {
                ...state,
                refreshList: true
            }
        }
        case EmployeeOrderDetailsMap.SET_ORDERDETAILS_NUMBER: {
            return {
                ...state,
                batchNumber: action.payload
            }
        }
        case EmployeeOrderDetailsMap.GET_EMPLOYEE_NAMES_SUCCESS: {
            return {
                ...state,
                employeeNames: action.payload
            }
        }

        default:
            return { ...state };
    }
}

export default employeeOrderDetailsReducer;