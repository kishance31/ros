import axios from 'axios'

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
    toggleAddressModal: (type) => {
        return {
            type
        }
    }

}
export default cartActions;

export const addToCartAsync = (tokens, products, quantity) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CartActionMap.ADD_TO_CART_START
            });
            let addToCartResponse = await axios({
                url: `http://127.0.0.1:4000/api/employee/cart/addToCart`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    tokens
                },
                data: {
                    products, quantity
                }
            });
            console.log(":::::::::::", addToCartResponse);
            if (addToCartResponse.data.response.responseCode === 200) {
                dispatch({
                    type: CartActionMap.ADD_TO_CART_SUCCESS,
                    payload: addToCartResponse.data.response.data.products
                })
            }
        }
        catch (error) {
            dispatch({
                type: CartActionMap.ADD_TO_CART_ERROR
            })
        }
    }
}

export const removeFromCartAsync = (tokens, id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CartActionMap.REMOVE_FROM_CART_BYID_START
            });
            let removeToCartResponse = await axios({
                url: `http://127.0.0.1:4000/api/employee/cart/deleteCart/${id}`,
                method: 'DELETE',
                headers: { tokens },
            });
            console.log("************", removeToCartResponse);
            if (removeToCartResponse.data.response.responseCode === 200) {
                dispatch({
                    type: CartActionMap.REMOVE_FROM_CART_BYID_SUCCESS,
                    payload: removeToCartResponse.data.response
                })
            }
        }
        catch (error) {
            dispatch({
                type: CartActionMap.REMOVE_FROM_CART_BYID_ERROR
            })
        }
    }
}