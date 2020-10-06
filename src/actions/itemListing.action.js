import axios from 'axios';

export const ItemListingMap = {
    CATEGORY_LIST_START: 'CATEGORY_LIST_START',
    CATEGORY_LIST_SUCCESS: 'CATEGORY_LIST_SUCCESS',
    CATEGORY_LIST_ERROR: 'CATEGORY_LIST_ERROR',
    PRODUCT_LIST_START: 'PRODUCT_LIST_START',
    PRODUCT_LIST_SUCCESS: 'PRODUCT_LIST_SUCCESS',
    PRODUCT_LIST_ERROR: 'PRODUCT_LIST_ERROR',
    GET_CARTBY_EMPLOYEE_ID_START: 'GET_CARTBY_EMPLOYEE_ID_START',
    GET_CARTBY_EMPLOYEE_ID_SUCCESS: 'GET_CARTBY_EMPLOYEE_ID_SUCCESS',
    GET_CARTBY_EMPLOYEE_ID_ERROR: 'GET_CARTBY_EMPLOYEE_ID_ERROR',
    PLACE_ORDER_START: 'PLACE_ORDER_START',
    PLACE_ORDER_SUCCESS: 'PLACE_ORDER_SUCCESS',
    PLACE_ORDER_ERROR: 'PLACE_ORDER_ERROR',
    UPDATE_ORDER_START: 'UPDATE_ORDER_START',
    UPDATE_ORDER_SUCCESS: 'UPDATE_ORDER_SUCCESS',
    UPDATE_ORDER_ERROR: 'UPDATE_ORDER_ERROR',
}

export const categoryListAsync = (tokens) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.CATEGORY_LIST_START
            });
            let categoryListResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/category/getCategoryWithSubCategory`,
                method: 'GET',
                headers: { tokens }
            });
            if (categoryListResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.CATEGORY_LIST_SUCCESS,
                    payload: categoryListResponse.data.response.data
                })
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.CATEGORY_LIST_ERROR
            })
        }
    }
}

export const productListAsync = (tokens, data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.PRODUCT_LIST_START
            });
            let productListResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/product/getProductList`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: data
            });
            if (productListResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.PRODUCT_LIST_SUCCESS,
                    payload: productListResponse.data.response.data
                })
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.PRODUCT_LIST_ERROR
            })
        }
    }
}

export const getCartByEmployeeIdAsync = (tokens, id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.GET_CARTBY_EMPLOYEE_ID_START
            });
            let getCartByEmployeeIdResponse = await axios({
                url: `http://127.0.0.1:4000/api/employee/cart/getCartByEmployeeId/${id}`,
                method: 'GET',
                headers: { tokens },
            });
            if (getCartByEmployeeIdResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.GET_CARTBY_EMPLOYEE_ID_SUCCESS,
                    payload: getCartByEmployeeIdResponse.data.response.data
                })
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.GET_CARTBY_EMPLOYEE_ID_ERROR
            })
        }
    }
}

export const placeOrderAsync = (tokens, data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.PLACE_ORDER_START
            });
            let placeOrderResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/employee/placeOrder`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: data
            });
            console.log("placeOrderResponseeeeeeeeeeeee", placeOrderResponse);
            if (placeOrderResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.PLACE_ORDER_SUCCESS,
                    payload: placeOrderResponse.data.response.data
                })
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.PLACE_ORDER_ERROR
            })
        }
    }
}

export const updateOrderAsync = (tokens, data, id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.UPDATE_ORDER_START
            });
            let updateOrderResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/employee/updateOrder/${id}`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: data
            });
            console.log("updateOrderResponseeeeeeeee", updateOrderResponse);
            if (updateOrderResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.UPDATE_ORDER_SUCCESS,
                    payload: updateOrderResponse.data.response.data
                })
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.UPDATE_ORDER_ERROR
            })
        }
    }
}