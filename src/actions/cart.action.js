export const CartActionMap = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    TOGGLE_CART: 'TOGGLE_CART',
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
            type: CartActionMap.ADD_TO_CART,
            payload: {productId},
        }
    },
    toggleCart: () => {
        return {
            type: CartActionMap.TOGGLE_CART,
        }
    }
}

export default cartActions;