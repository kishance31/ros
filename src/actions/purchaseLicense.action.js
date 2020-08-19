import axios from 'axios';

export const PurchaseLicenseMap = {
    ADD_LICENSE: "ADD_LICENSE",
    AVAILABLE_LICENSE_START: 'available_license_start',
    AVAILABLE_LICENSE_SUCCESS: 'available_license_success',
    AVAILABLE_LICENSE_ERROR: 'available_license_error',
    ORDER_ID_START: 'order_id_start',
    ORDER_ID_SUCCESS: 'order_id_success',
    ORDER_ID_ERROR: 'order_id_error',
    PURCHASE_LICENSE_START:'purchase_license_start',
    PURCHASE_LICENSE_SUCCESS:'purchase_license_success',
    PURCHASE_LICENSE_ERROR:'purchase_license_error'
    
}

const purchaseLicenseAction = {
    addLicense: (data) => {
        return {
            type: PurchaseLicenseMap.ADD_LICENSE,
            payload: data
        }
    }
}

export const availableLicenseAsync = () => {

    return async (dispatch) => {

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
        } else {
            dispatch({
                type: PurchaseLicenseMap.AVAILABLE_LICENSE_ERROR
            })
        }
    }
}

export const orderIdAsync = (orderId,token) => {

    return async (dispatch) => {

        dispatch({
            type: PurchaseLicenseMap.ORDER_ID_START
        });
        console.log(orderId);
        console.log(token);
        let orderIdResponse = await axios({
            url: `http://127.0.0.1:4000/api/corporate-admin/purchaseLicense/orderId/${orderId}`,
            method: "POST",
            headers: {
                'tokens': token
            }
        });
        console.log(orderIdResponse)
        if (orderIdResponse.data.response.responseCode === 201) {
            dispatch({
                type: PurchaseLicenseMap.ORDER_ID_SUCCESS,
                payload: orderIdResponse.data.response.orderDetails.orderId
            })
        } else {
            dispatch({
                type: PurchaseLicenseMap.ORDER_ID_ERROR
            })
        }
    }
}

export const purchaseLicenseAsync = (orderId, purchaseLicenses, tokens) => {

    return async (dispatch) => {

        dispatch({
            type: PurchaseLicenseMap.PURCHASE_LICENSE_START
        });
        let purchaseLicenseResponse = await axios({
            url: `http://127.0.0.1:4000/api/corporate-admin/purchaseLicense/purchase`,
            method: "POST",
            data:{
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
        } else {
            dispatch({
                type: PurchaseLicenseMap.PURCHASE_LICENSE_ERROR
            })
        }
    }
}


export default purchaseLicenseAction;