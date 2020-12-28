import { CartActionMap } from '../actions/cart.action';

const initialState = {
    //     user: {token: "1234", _id: "1234", role: "EMPLOYEE"},
    shoppingCart: [],
    openCart: false,
    modals: {
        ShowthankYouModal: false,
        showAdminApprovalModal: false
    },
    addToCart: [],
    removeToCart: [],
    refreshCart: true,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionMap.TOGGLE_CART: {
            return {
                ...state,
                openCart: !state.openCart
            }
        }
        case CartActionMap.OPEN_ADDRESS_MODAL: {
            return {
                ...state,
                openCart: !state.openCart,
                modals: {
                    ShowthankYouModal: true,
                    showAdminApprovalModal: false
                }
            }
        }
        case CartActionMap.CLOSE_ADDRESS_MODAL: {
            return {
                ...state,
                openCart: false,
                modals: {
                    ShowthankYouModal: false,
                    showAdminApprovalModal: false
                }
            }
        }
        case CartActionMap.TOGGLE_FINAL_MSG_MODAL: {
            return {
                ...state,
                openCart: false,
                modals: {
                    ShowthankYouModal: false,
                    showAdminApprovalModal: true
                },
                shoppingCart: [],
            }
        }
        case CartActionMap.CLOSE_ALL_MODAL: {
            return {
                ...state,
                openCart: false,
                modals: {
                    ShowthankYouModal: false,
                    showAdminApprovalModal: false
                }
            }
        } case CartActionMap.ADD_TO_CART_SUCCESS: {
            return {
                ...state,
                refreshCart: true,
                // addToCart: [...action.payload]
            }
        }
        case CartActionMap.REMOVE_FROM_CART_BYID_SUCCESS: {
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(prod => prod._id !== action.payload)
            }
        }
        case CartActionMap.GET_CARTBY_EMPLOYEE_ID_SUCCESS: {
            return {
                ...state,
                shoppingCart: action.payload.length ? [...action.payload[0].productDetails] : [],
                refreshCart: false
            }
        }
        case CartActionMap.GET_CARTBY_EMPLOYEE_ID_ERROR: {
            return {
                ...state,
                shoppingCart: [...action.payload[0].productDetails],
                refreshCart: false
            }
        }
        default:
            return { ...state }
    }
}

export default cartReducer;
