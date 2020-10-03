import axios from 'axios';

export const ItemListingMap = {
    CATEGORY_LIST_START: 'CATEGORY_LIST_START',
    CATEGORY_LIST_SUCCESS: 'CATEGORY_LIST_SUCCESS',
    CATEGORY_LIST_ERROR: 'CATEGORY_LIST_ERROR',
    PRODUCT_LIST_START: 'PRODUCT_LIST_START',
    PRODUCT_LIST_SUCCESS: 'PRODUCT_LIST_SUCCESS',
    PRODUCT_LIST_ERROR: 'PRODUCT_LIST_ERROR',
    GET_PRODUCT_BYID_START: 'GET_PRODUCT_BYID_START',
    GET_PRODUCT_BYID_SUCCESS: 'GET_PRODUCT_BYID_SUCCESS',
    GET_PRODUCT_BYID_ERROR: 'GET_PRODUCT_BYID_ERROR'
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
                headers: {
                    tokens
                }
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

export const getProductByIdAsync = (tokens, id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.PRODUCT_LIST_START
            });
            let getProductByIdResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/product/getProductById/${id}`,
                method: 'GET',
                headers: {
                    tokens
                }
            });
            if (getProductByIdResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.PRODUCT_LIST_SUCCESS,
                    // payload: getProductByIdResponse
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

