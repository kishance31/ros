import { ItemListingMap } from '../actions/itemListing.action';

const initialState = {
    categoryList: [],
    productList: [],
    getProductById: [],
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
        case ItemListingMap.GET_PRODUCT_BYID_SUCCESS: {
            return {
                ...state,
                getProductById: action.payload
            }
        }
        default:
            return { ...state }
    }
}

export default itemListingReducer;