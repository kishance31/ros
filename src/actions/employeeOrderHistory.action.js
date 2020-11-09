import axios from 'axios';
import getServerCore from '../utils/apiUtils';
import notificationActions from './notifications.action';

const { serverUrl } = getServerCore();

export const EmployeeOrderHistoryMap = {
    GET_ORDER_HISTORY_START: 'GET_ORDER_HISTORY_START',
    GET_ORDER_HISTORY_SUCCESS: 'GET_ORDER_HISTORY_SUCCESS',
    GET_ORDER_HISTORY_ERROR: 'GET_ORDER_HISTORY_ERROR',
    CANCEL_ORDER_START: 'CANCEL_ORDER_START',
    CANCEL_ORDER_SUCCESS: 'CANCEL_ORDER_SUCCESS',
    CANCEL_ORDER_ERROR: 'CANCEL_ORDER_ERROR',
    CHANGE_ORDER_PAGE: 'CHANGE_ORDER_PAGE',
    REFRESH_ORDER_HISTORY: 'REFRESH_ORDER_HISTORY',
}

export const EmployeeOrderHistoryActions = {
    getOrderHistoryStart: () => ({ type: EmployeeOrderHistoryMap.GET_ORDER_HISTORY_START }),
    getOrderHistorySuccess: (data) => ({ type: EmployeeOrderHistoryMap.GET_ORDER_HISTORY_SUCCESS, payload: data }),
    getOrderHistoryError: () => ({ type: EmployeeOrderHistoryMap.GET_ORDER_HISTORY_ERROR }),
    cancelOrderStart: () => ({ type: EmployeeOrderHistoryMap.CANCEL_ORDER_START }),
    cancelOrderSuccess: (id) => ({ type: EmployeeOrderHistoryMap.CANCEL_ORDER_SUCCESS, payload: id }),
    cancelOrderError: () => ({ type: EmployeeOrderHistoryMap.CANCEL_ORDER_ERROR }),
    chanegOrderPage: (batchNumber) => ({ type: EmployeeOrderHistoryMap.CHANGE_ORDER_PAGE, payload: batchNumber }),
    refreshOrderHistory: () => ({ type: EmployeeOrderHistoryMap.REFRESH_ORDER_HISTORY }),
}

export const getEmployeeOrderHistoryAsync = (batch, limit) => async (dispatch, getState) => {
    try {
        dispatch(EmployeeOrderHistoryActions.getOrderHistoryStart());
        const { _id, tokens } = getState().auth.user;
        const { data } = await axios({
            url: `${serverUrl}/corporate-admin/employee/getEmployeeOrder/${_id}/${batch}/${limit}`,
            method: "GET",
            headers: {
                tokens
            }
        });
        if (data.response && data.response.responseCode === 200) {
            return dispatch(EmployeeOrderHistoryActions.getOrderHistorySuccess(data.response));
        }
        dispatch(EmployeeOrderHistoryActions.getOrderHistoryError());
    } catch (error) {
        dispatch(EmployeeOrderHistoryActions.getOrderHistoryError());
    }
}

export const cancelOrderAsync = (id, cb) => async (dispatch, getState) => {
    try {
        dispatch(EmployeeOrderHistoryActions.cancelOrderStart());
        const { tokens } = getState().auth.user;
        const { data } = await axios({
            url: `${serverUrl}/corporate-admin/employee/cancelEmployeeOrder/${id}`,
            method: "POST",
            headers: {
                tokens
            }
        });
        if (data.response && data.response.responseCode === 200) {
            if (cb) {
                dispatch(cb());
            }
            dispatch(EmployeeOrderHistoryActions.cancelOrderSuccess(id));
            return dispatch(notificationActions.showNotification({
                title: 'Cancel Order',
                message: "Cancel Order successfull.",
                color: 'success',
                // duration: 5000,
            }));
        }
        dispatch(EmployeeOrderHistoryActions.cancelOrderError());
        return dispatch(notificationActions.showNotification({
            title: 'Cancel Order',
            message: "Error cancelling order.",
            color: 'error',
            // duration: 5000,
        }));
    } catch (error) {
        dispatch(EmployeeOrderHistoryActions.cancelOrderError());
        return dispatch(notificationActions.showNotification({
            title: 'Cancel Order',
            message: "Error cancelling order.",
            color: 'error',
            // duration: 5000,
        }));
    }
}