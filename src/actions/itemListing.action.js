import axios from 'axios';
import cartActions from './cart.action';
import { EmployeeOrderHistoryActions } from './employeeOrderHistory.action';
import getServerCore from '../utils/apiUtils';
import notificationActions from './notifications.action';

const { serverUrl } = getServerCore();

export const ItemListingMap = {
    CATEGORY_LIST_START: 'CATEGORY_LIST_START',
    CATEGORY_LIST_SUCCESS: 'CATEGORY_LIST_SUCCESS',
    CATEGORY_LIST_ERROR: 'CATEGORY_LIST_ERROR',
    PRODUCT_LIST_START: 'PRODUCT_LIST_START',
    PRODUCT_LIST_SUCCESS: 'PRODUCT_LIST_SUCCESS',
    PRODUCT_LIST_ERROR: 'PRODUCT_LIST_ERROR',
    PLACE_ORDER_START: 'PLACE_ORDER_START',
    PLACE_ORDER_SUCCESS: 'PLACE_ORDER_SUCCESS',
    PLACE_ORDER_ERROR: 'PLACE_ORDER_ERROR',
    UPDATE_ORDER_START: 'UPDATE_ORDER_START',
    UPDATE_ORDER_SUCCESS: 'UPDATE_ORDER_SUCCESS',
    UPDATE_ORDER_ERROR: 'UPDATE_ORDER_ERROR',
    SET_SELECTED_CATEGORY: 'SET_SELECTED_CATEGORY',
    ADD_MORE_PRODUCTS: 'ADD_MORE_PRODUCTS',
}

export const ItemListingActions = {
    setSelectedCategory: (category) => ({ type: ItemListingMap.SET_SELECTED_CATEGORY, payload: category }),
}

export const categoryListAsync = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: ItemListingMap.CATEGORY_LIST_START
            });
            const { tokens } = getState().auth.user
            let categoryListResponse = await axios({
                url: `${serverUrl}/corporate-admin/category/getCategoryWithSubCategory`,
                method: 'GET',
                headers: { tokens }
            });
            if (categoryListResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.CATEGORY_LIST_SUCCESS,
                    payload: categoryListResponse.data.response.data
                });
                dispatch(productListAsync());
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.CATEGORY_LIST_ERROR
            })
        }
    }
}

export const productListAsync = (type) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: ItemListingMap.PRODUCT_LIST_START
            });
            const {
                itemListing: {
                    selectedCategory, page, limit
                },
                auth: {
                    user: {
                        tokens,
                        license
                    }
                }
            } = getState();
            let productDetails = {
                license_id: license[0]._id
            };
            if (selectedCategory.category_id) {
                productDetails["category_id"] = selectedCategory.category_id;
                productDetails["sub_category_id"] = selectedCategory._id;
            } else {
                productDetails["category_id"] = selectedCategory._id;
            }
            let productListResponse = await axios({
                url: `${serverUrl}/corporate-admin/product/getProductList/${type === "add" ? page + 1 : page}/${limit}`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: productDetails
            });
            if (productListResponse.data.response.responseCode === 200) {
                if (type === "add") {
                    dispatch({
                        type: ItemListingMap.ADD_MORE_PRODUCTS,
                        payload: productListResponse.data.response
                    })
                } else {
                    dispatch({
                        type: ItemListingMap.PRODUCT_LIST_SUCCESS,
                        payload: productListResponse.data.response
                    })
                }
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.PRODUCT_LIST_ERROR
            })
        }
    }
}

export const placeOrderAsync = (selectedAddress) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: ItemListingMap.PLACE_ORDER_START
            });
            const {
                auth: {
                    user: {
                        tokens,
                        _id,
                        corporate_admin_id,
                    }
                },
                cart: {
                    shoppingCart
                }
            } = getState();
            const products = shoppingCart.map(product => product._id)
            let { data } = await axios({
                url: `${serverUrl}/corporate-admin/employee/placeOrder`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: {
                    employeeId: _id,
                    corporateId: corporate_admin_id,
                    products,
                    address: selectedAddress
                }
            });
            if (data.response && data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.PLACE_ORDER_SUCCESS,
                })
                dispatch(cartActions.toggleFinalMsgModal());
                return dispatch(EmployeeOrderHistoryActions.refreshOrderHistory());
            }
            dispatch(notificationActions.showNotification({
                title: 'Place Order',
                message: "Failed to place order",
                // duration: 5000,
            }));
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.PLACE_ORDER_ERROR
            })
            dispatch(notificationActions.showNotification({
                title: 'Place Order',
                message: "Failed to place order",
                // duration: 5000,
            }));
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
                url: `${serverUrl}/corporate-admin/employee/updateOrder/${id}`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: data
            });
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