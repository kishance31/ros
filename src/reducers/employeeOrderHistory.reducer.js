import { EmployeeOrderHistoryMap } from '../actions/employeeOrderHistory.action';

const initState = {
    orderHistory: [],
    refreshHistory: true,
    totalRecords: 0,
    batchNumber: 1,
    // limit: 5
}

const EmployeeOrderHistoryReducer = (state = initState, action) => {
    switch (action.type) {
        case EmployeeOrderHistoryMap.GET_ORDER_HISTORY_START: {
            return {
                ...state,
            }
        }
        case EmployeeOrderHistoryMap.GET_ORDER_HISTORY_SUCCESS: {
            return {
                ...state,
                orderHistory: action.payload.list,
                totalRecords: action.payload.totalRecords,
                refreshHistory: false,
                // batchNumber: action
            }
        }
        case EmployeeOrderHistoryMap.GET_ORDER_HISTORY_ERROR: {
            return {
                ...state,
                refreshHistory: false,
            }
        }
        case EmployeeOrderHistoryMap.CANCEL_ORDER_SUCCESS: {
            return {
                ...state,
                // orderHistory: state.orderHistory.filter(order => order._id != action.payload),
                refreshHistory: true
            }
        }
        case EmployeeOrderHistoryMap.CHANGE_ORDER_PAGE: {
            return {
                ...state,
                batchNumber: action.payload,
                refreshHistory: true,
            }
        }
        case EmployeeOrderHistoryMap.REFRESH_ORDER_HISTORY: {
            return {
                ...state,
                refreshHistory: true,
            }
        }

        default:
            return {
                ...state
            }
    }
}

export default EmployeeOrderHistoryReducer;