import axios from 'axios';
import {employeeAndLicenseCountAsync} from './employeeAndLicense.action';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const PurchaseLicenseMap = {
    ADD_LICENSE_ORDER: 'ADD_LICENSE_ORDER',
    DELETE_LICENSE_ORDER: 'DELETE_LICENSE_ORDER',
    AVAILABLE_LICENSE_START: 'available_license_start',
    AVAILABLE_LICENSE_SUCCESS: 'available_license_success',
    AVAILABLE_LICENSE_ERROR: 'available_license_error',
    ORDER_ID_START: 'order_id_start',
    ORDER_ID_SUCCESS: 'order_id_success',
    ORDER_ID_ERROR: 'order_id_error',
    PURCHASE_LICENSE_START: 'purchase_license_start',
    PURCHASE_LICENSE_SUCCESS: 'purchase_license_success',
    PURCHASE_LICENSE_ERROR: 'purchase_license_error',
    LICENSE_ORDER_HISTORY_START: 'license_order_history_start',
    LICENSE_ORDER_HISTORY_SUCCESS: 'license_order_history_success',
    LICENSE_ORDER_HISTORY_ERROR: 'license_order_history_error',
    REFRESH_ORDER_HISTORY: 'REFRESH_ORDER_HISTORY',
    SET_LICENSE_BATCH_NUMBER: 'SET_LICENSE_BATCH_NUMBER',
}

const purchaseLicenseAction = {
    addLicense: (data) => {
        return {
            type: PurchaseLicenseMap.ADD_LICENSE_ORDER,
            payload: data
        }
    },
    deleteLicense: (data) => {
        return {
            type: PurchaseLicenseMap.DELETE_LICENSE_ORDER,
            payload: data,
        }
    },
    refreshOrderHistory: () => {
        return {
            type: PurchaseLicenseMap.REFRESH_ORDER_HISTORY
        }
    },
    setBatchNumber: (num) => {
        return {
            type: PurchaseLicenseMap.SET_LICENSE_BATCH_NUMBER,
            payload: num,
        }
    },
}

export const availableLicenseAsync = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: PurchaseLicenseMap.AVAILABLE_LICENSE_START
            });
            const {
                tokens
            } = getState().auth.user;
            let availableLicenseResponse = await axios({
                url: `${serverUrl}/license/corporateLicenseList`,
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    tokens
                }
            });
            if (availableLicenseResponse.data.response.responseCode === 200) {
                dispatch({
                    type: PurchaseLicenseMap.AVAILABLE_LICENSE_SUCCESS,
                    payload: availableLicenseResponse.data.response.licenseList
                })
            }
        }
        catch (error) {
            dispatch({
                type: PurchaseLicenseMap.AVAILABLE_LICENSE_ERROR
            })
        }
    }
}

export const orderIdAsync = (orderId, token) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: PurchaseLicenseMap.ORDER_ID_START
            });
            let orderIdResponse = await axios({
                url: `${serverUrl}/corporate-admin/purchaseLicense/orderId/${orderId}`,
                method: "POST",
                headers: {
                    'tokens': token
                }
            });
            if (orderIdResponse.data.response.responseCode === 201) {
                dispatch({
                    type: PurchaseLicenseMap.ORDER_ID_SUCCESS,
                    payload: orderIdResponse.data.response.orderDetails.orderId
                })
            }

        } catch (error) {
            dispatch({
                type: PurchaseLicenseMap.ORDER_ID_ERROR
            })
        }
    }
}

export const purchaseLicenseAsync = (orderId, purchaseLicenses, tokens, data) => {

    return async (dispatch, getState) => {
        try {
            const {auth: {user}} = getState();
            dispatch({
                type: PurchaseLicenseMap.PURCHASE_LICENSE_START
            });
            let purchaseLicenseResponse = await axios({
                url: `${serverUrl}/corporate-admin/purchaseLicense/purchase`,
                method: "POST",
                data: {
                    orderId, purchaseLicenses,
                    paypalDetails: data,
                },
                headers: {
                    'Content-type': 'application/json',
                    tokens
                }
            });
            if (purchaseLicenseResponse.data.response.responseCode === 201) {
                dispatch({
                    type: PurchaseLicenseMap.PURCHASE_LICENSE_SUCCESS
                })
                dispatch(employeeAndLicenseCountAsync(user._id, tokens));
            }
        } catch (error) {
            dispatch({
                type: PurchaseLicenseMap.PURCHASE_LICENSE_ERROR
            })
        }
    }
}

export const licenseOrderHistoryAsync = (corporateId, token, limit, batch) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: PurchaseLicenseMap.LICENSE_ORDER_HISTORY_START
            });
            let licenseOrderHistoryResponse = await axios({
                url: `${serverUrl}/corporate-admin/purchaseLicense/purchase/${corporateId}`,
                data: {
                    limit,
                    batch: batch - 1
                },
                method: "POST",
                headers: {
                    'tokens': token,
                    'Content-Type': 'application/json'
                }
            });
            if (licenseOrderHistoryResponse.data.response.responseCode === 200) {
                dispatch({
                    type: PurchaseLicenseMap.LICENSE_ORDER_HISTORY_SUCCESS,
                    payload: {
                        purchaseLicenses: licenseOrderHistoryResponse.data.response.purchaseLicenses,
                        totalRecords: licenseOrderHistoryResponse.data.response.totalCount,
                    }
                })
            }
        } catch (error) {
            dispatch({
                type: PurchaseLicenseMap.LICENSE_ORDER_HISTORY_ERROR
            })
        }
    }
}

export default purchaseLicenseAction;