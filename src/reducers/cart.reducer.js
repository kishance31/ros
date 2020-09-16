import { CartActionMap } from '../actions/cart.action';

const initialState = {
//     user: {token: "1234", _id: "1234", role: "EMPLOYEE"},
    shoppingCart:[],
    openCart: false,
    modals: {
        ShowthankYouModal:false,
        showAdminApprovalModal: false
    }
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CartActionMap.ADD_TO_CART: {
            return {
                ...state,
                shoppingCart: [
                    ...state.shoppingCart,
                    {...action.payload},
                ]
            }
        }
        case CartActionMap.REMOVE_FROM_CART: {
            return {
                ...state,
                shoppingCart: [...state.filter(product => product.productId !== action.payload.productId)],
            }
        }
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
                    ShowthankYouModal:true,
                    showAdminApprovalModal: false
                }
            }
        }
        case CartActionMap.CLOSE_ADDRESS_MODAL: {
            return {
                ...state,
                openCart: false,
                modals: {
                    ShowthankYouModal:false,
                    showAdminApprovalModal: true
                }
            }
        }
        case CartActionMap.CLOSE_ALL_MODAL: {
            return {
                ...state,
                openCart: false,
                modals: {
                    ShowthankYouModal:false,
                    showAdminApprovalModal: false
                }
            }
        }
        default:
            return {...state}
    }
}

export default cartReducer;
