import { ItemListingMap } from '../actions/itemListing.action';

const initialState = {
    categoryList: [],
    productList: [],
    getProductById: [],
    getCartByEmployeeId: [],
    placeOrder: [],
    updateOrder: []
}

const itemListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ItemListingMap.CATEGORY_LIST_SUCCESS: {
            return {
                ...state,
                categoryList: action.payload
            }
        }
        case ItemListingMap.PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                productList: action.payload
            }
        }
        case ItemListingMap.GET_CARTBY_EMPLOYEE_ID_SUCCESS: {
            return {
                ...state,
                getCartByEmployeeId: [...action.payload]
            }
        }
        case ItemListingMap.PLACE_ORDER_SUCCESS: {
            return {
                ...state,
                placeOrder: action.payload
            }
        }
        case ItemListingMap.UPDATE_ORDER_SUCCESS: {
            return {
                ...state,
                updateOrder: action.payload
            }
        }
        default:
            return { ...state }
    }
}

export default itemListingReducer;