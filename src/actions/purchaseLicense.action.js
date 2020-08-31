import axios from 'axios';

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
    }
}

export const availableLicenseAsync = () => {

    return async (dispatch) => {
        try {
            dispatch({
                type: PurchaseLicenseMap.AVAILABLE_LICENSE_START
            });
            let availableLicenseResponse = await axios({
                url: `http://127.0.0.1:4000/api/license/licenseList`,
                method: "GET",
                headers: {
                    'Content-type': 'application/json'
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
                url: `http://127.0.0.1:4000/api/corporate-admin/purchaseLicense/orderId/${orderId}`,
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

export const purchaseLicenseAsync = (orderId, purchaseLicenses, tokens) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: PurchaseLicenseMap.PURCHASE_LICENSE_START
            });
            let purchaseLicenseResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/purchaseLicense/purchase`,
                method: "POST",
                data: {
                    orderId, purchaseLicenses
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
                url: `http://127.0.0.1:4000/api/corporate-admin/purchaseLicense/purchase/${corporateId}`,
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