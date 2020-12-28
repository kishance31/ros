import axios from 'axios';
import notificationActions from './notifications.action';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const CartActionMap = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    TOGGLE_CART: 'TOGGLE_CART',
    OPEN_ADDRESS_MODAL: 'OPEN_ADDRESS_MODAL',
    CLOSE_ADDRESS_MODAL: 'CLOSE_ADDRESS_MODAL',
    CLOSE_ALL_MODAL: 'CLOSE_ALL_MODAL',
    ADD_TO_CART_START: 'ADD_TO_CART_START',
    ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',
    ADD_TO_CART_ERROR: 'ADD_TO_CART_ERROR',
    REMOVE_FROM_CART_BYID_START: 'REMOVE_FROM_CART_BYID_START',
    REMOVE_FROM_CART_BYID_SUCCESS: 'REMOVE_FROM_CART_BYID_SUCCESS',
    REMOVE_FROM_CART_BYID_ERROR: 'REMOVE_FROM_CART_BYID_ERROR',
    GET_CARTBY_EMPLOYEE_ID_START: 'GET_CARTBY_EMPLOYEE_ID_START',
    GET_CARTBY_EMPLOYEE_ID_ERROR: 'GET_CARTBY_EMPLOYEE_ID_ERROR',
    GET_CARTBY_EMPLOYEE_ID_SUCCESS: 'GET_CARTBY_EMPLOYEE_ID_SUCCESS',
    TOGGLE_FINAL_MSG_MODAL: 'TOGGLE_FINAL_MSG_MODAL',
    EMPTY_CART: 'EMPTY_CART',
}

const cartActions = {
    addToCart: (productDetails) => {
        return {
            type: CartActionMap.ADD_TO_CART,
            payload: productDetails,
        }
    },
    removeFromCart: (productId) => {
        return {
            type: CartActionMap.REMOVE_FROM_CART,
            payload: { productId },
        }
    },
    toggleCart: () => {
        return {
            type: CartActionMap.TOGGLE_CART,
        }
    },
    toggleAddressModal: () => {
        return {
            type: CartActionMap.OPEN_ADDRESS_MODAL
        }
    },
    closeAllModals: () => {
        return {
            type: CartActionMap.CLOSE_ALL_MODAL,
        }
    },
    toggleFinalMsgModal: () => {
        return {
            type: CartActionMap.TOGGLE_FINAL_MSG_MODAL
        }
    },
    emptyCart: () => {
        return {
            type: CartActionMap.EMPTY_CART,
        }
    },
}
export default cartActions;

export const addToCartAsync = (products) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: CartActionMap.ADD_TO_CART_START
            });
            const { tokens, _id } = getState().auth.user;
            let { data } = await axios({
                url: `${serverUrl}/employee/cart/addToCart`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: {
                    products,
                    employeeId: _id
                }
            });
            if (data.response && data.response.responseCode === 200) {
                dispatch({
                    type: CartActionMap.ADD_TO_CART_SUCCESS,
                })
            }
            if (data.response && data.response.responseCode === 500) {
                dispatch(notificationActions.showNotification({
                    title: 'Add to cart',
                    message: data.response.responseMessage,
                    // duration: 5000,
                }));
            }
            dispatch(notificationActions.showNotification({
                title: "Add to cart",
                message: "Product added to cart successfully",
                // duration: 7000,
            }));
        }
        catch (error) {
            dispatch({
                type: CartActionMap.ADD_TO_CART_ERROR
            })
        }
    }
}

export const getCartByEmployeeIdAsync = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: CartActionMap.GET_CARTBY_EMPLOYEE_ID_START
            });
            const { tokens, _id } = getState().auth.user;
            let { data } = await axios({
                url: `${serverUrl}/employee/cart/getCartByEmployeeId/${_id}`,
                method: 'GET',
                headers: { tokens },
            });
            if (data.response && data.response.responseCode === 200) {
                dispatch({
                    type: CartActionMap.GET_CARTBY_EMPLOYEE_ID_SUCCESS,
                    payload: data.response.data
                })
            }
        }
        catch (error) {
            dispatch({
                type: CartActionMap.GET_CARTBY_EMPLOYEE_ID_ERROR
            })
        }
    }
}

export const removeFromCartAsync = (productId) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: CartActionMap.REMOVE_FROM_CART_BYID_START
            });
            const { tokens, _id } = getState().auth.user;
            let { data } = await axios({
                url: `${serverUrl}/employee/cart/removeProductFromCart`,
                method: 'POST',
                headers: { tokens },
                data: {
                    employeeId: _id,
                    productId,
                }
            });
            if (data.response && data.response.responseCode === 200) {
                dispatch({
                    type: CartActionMap.REMOVE_FROM_CART_BYID_SUCCESS,
                    payload: productId
                })
            }
            dispatch(notificationActions.showNotification({
                title: "Remove from cart",
                message: "Product removed from cart successfully",
                // duration: 7000,
            }));
        }
        catch (error) {
            dispatch({
                type: CartActionMap.REMOVE_FROM_CART_BYID_ERROR
            })
            dispatch(notificationActions.showNotification({
                title: "Remove from cart",
                message: error.message,
                // duration: 7000,
            }));
        }
    }
}