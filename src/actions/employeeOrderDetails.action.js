import axios from 'axios';
import notificationActions from './notifications.action';
import { InvoiceActions } from './invoice.action';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const EmployeeOrderDetailsMap = {
    GET_ORDERDETAILS: 'GET_ORDERDETAILS',
    GET_ORDERDETAILS_SUCCESS: 'GET_ORDERDETAILS_SUCCESS',
    GET_ORDERDETAILS_ERROR: 'GET_ORDERDETAILS_ERROR',
    REFRESH_ORDERDETAILS_LIST: 'REFRESH_ORDERDETAILS_LIST',
    SET_ORDERDETAILS_NUMBER: 'SET_ORDERDETAILS_NUMBER',
    GET_EMPLOYEE_NAMES_SUCCESS: 'GET_EMPLOYEE_NAMES_SUCCESS'
}

export const EmployeeOrderDetailsActions = {
    getOrder: () => ({ type: EmployeeOrderDetailsMap.GET_ORDERDETAILS }),
    getOrderSuccess: (data) => ({ type: EmployeeOrderDetailsMap.GET_ORDERDETAILS_SUCCESS, payload: data }),
    getEmployeeNameSuccess: (data) => ({ type: EmployeeOrderDetailsMap.GET_EMPLOYEE_NAMES_SUCCESS, payload: data }),
    getOrderError: () => ({ type: EmployeeOrderDetailsMap.GET_ORDERDETAILS_ERROR }),
    refreshEmployeeList: () => {
        return {
            type: EmployeeOrderDetailsMap.REFRESH_ORDERDETAILS_LIST
        }
    },
    setBatchNumber: (num) => {
        return {
            type: EmployeeOrderDetailsMap.SET_ORDERDETAILS_NUMBER,
            payload: num,
        }
    },
}

export const getEmployeeOrderDetailsAsync = (employeeId) => async (dispatch, getState) => {
    try {
        dispatch(EmployeeOrderDetailsActions.getOrder());
        const {
            auth: {
                user: {
                    tokens
                }
            },
            employeeOrderDetails: {
                batchNumber,
            }
        } = getState();
        let options = {
            url: `${serverUrl}/corporate-admin/getEmployeeOrderDetails/${batchNumber - 1}/100`,
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                tokens,
            }
        }
        if (employeeId) {
            options.data = { employeeId };
        }
        const { data } = await axios(options);
        if (data.response && data.response.responseCode === 200) {
            let newList = {};
            data.response.list.forEach(order => {
                let email = order.employeeDetails.email
                if (newList[email]) {
                    newList[email].push(order)
                } else {
                    newList[email] = [order]
                }
            })
            return dispatch(
                EmployeeOrderDetailsActions.getOrderSuccess(
                    { list: newList, totalRecords: data.response.totalRecords }
                )
            );
        }
        dispatch(EmployeeOrderDetailsActions.getOrderError());
    } catch (error) {
        dispatch(EmployeeOrderDetailsActions.getOrderError());
    }
}

export const getEmployeeNamesAsync = () => async (dispatch, getState) => {
    try {
        const { tokens } = getState().auth.user;
        let options = {
            url: `${serverUrl}/corporate-admin/getEmployeeNames`,
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                tokens,
            }
        }
        const { data } = await axios(options);
        if (data.response && data.response.responseCode === 200) {
            return dispatch(
                EmployeeOrderDetailsActions.getEmployeeNameSuccess(data.response.data)
            );
        }
    } catch (error) {
    }
}

export const confirmOrderPayment = (orders, paypalDetails) => async (dispatch, getState) => {
    try {
        const { tokens } = getState().auth.user;
        let options = {
            url: `${serverUrl}/corporate-admin/confirmEmployeeOrders`,
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                tokens,
            },
            data: {
                orders, paypalDetails
            }
        }
        const { data } = await axios(options);
        if (data.response && data.response.responseCode === 200) {
            dispatch(getEmployeeOrderDetailsAsync());
            dispatch(InvoiceActions.refreshList());
            return dispatch(notificationActions.showNotification({
                title: "Order Payment Successfull.",
                message: `Order payment is success.
                once admin confirms the order will be delivered.`,
                color: 'success'
                // duration: 7000,
            }));
        }
        dispatch(notificationActions.showNotification({
            title: "Order Payment Successfull.",
            message: `Error while confirming order. Please contact ROS Admin, if amount is deducted.`,
            color: 'error'
            // duration: 7000,
        }));
    } catch (error) {
        dispatch(notificationActions.showNotification({
            title: "Order Payment Successfull.",
            message: `Error while confirming order. Please contact ROS Admin, if amount is deducted.`,
            color: 'error'
            // duration: 7000,
        }));
    }
}