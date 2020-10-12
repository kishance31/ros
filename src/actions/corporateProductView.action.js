import axios from 'axios';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const productListMap = {
    PRODUCTVIEW_LIST_START: 'PRODUCTVIEW_LIST_START',
    PRODUCTVIEW_LIST_SUCCESS: 'PRODUCTVIEW_LIST_SUCCESS',
    PRODUCTVIEW_LIST_ERROR: 'PRODUCTVIEW_LIST_ERROR',
    REFRESH_PRODUCTVIEW: 'REFRESH_PRODUCTVIEW',
    SET_PAGE_NUMBER: 'SET_PAGE_NUMBER',
    DISPLAY_CATEGORY_DATA: "DISPLAY_CATEGORY_DATA"
}

export const ProductViewAction = {
    refreshList: (num) => {
        return {
            type: productListMap.REFRESH_PRODUCTVIEW,
            payload: num
        }
    },
    setBatchNumber: (num) => {
        return {
            type: productListMap.SET_PAGE_NUMBER,
            payload: num,
        }
    },
}

export const productListAsync = (categoryId, licenseId) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: productListMap.PRODUCTVIEW_LIST_START
            });
            const {
                auth: {
                    user: {
                        tokens,
                    }
                },
                corporateProductView: {
                    page,
                    limit
                }
            } = getState();
            let productDetails = {};
            if (licenseId) {
                productDetails.license_id = licenseId
            }
            if (categoryId) {
                productDetails["category_id"] = categoryId;
            }
            let { data } = await axios({
                url: `${serverUrl}/corporate-admin/product/getProductList/${page - 1}/${limit}`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: productDetails
            });
            if (data.response && data.response.responseCode === 200) {
                dispatch({
                    type: productListMap.PRODUCTVIEW_LIST_SUCCESS,
                    payload: data.response
                })
            }
        }
        catch (error) {
            dispatch({
                type: productListMap.PRODUCTVIEW_LIST_ERROR
            })
        }
    }
}

export const DisplayCategoryListAsync = () => {
    return async (dispatch, getState) => {
        try {
            const {
                auth: {
                    user: {
                        tokens,
                    }
                },
            } = getState();
            let { data } = await axios({
                url: `${serverUrl}/corporate-admin/category/getCategoryList`,
                method: "GET",
                headers: {
                    'Content-type': 'appplication/json',
                    tokens
                },
            })
            if (data.response && data.response.responseCode === 200) {
                return dispatch({
                    type: productListMap.DISPLAY_CATEGORY_DATA,
                    payload: data.response.data
                });
            }
        } catch (error) {
            // dispatch(licenseManagementActions.toggleLicenseModal({type:licenseManagementMap.CLOSE_LICENSE_MODAL}))
        }

    }
}