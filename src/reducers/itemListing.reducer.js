import { ItemListingMap } from '../actions/itemListing.action';

const initialState = {
    categoryList: [],
    productList: [],
    getProductById: [],
    getCartByEmployeeId: [],
    placeOrder: [],
    updateOrder: [],
    productCount: 0,
    selectedCategoryRoute: "",
    selectedCategory: {},
    page: 0,
    limit: 8,
}

const itemListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ItemListingMap.CATEGORY_LIST_SUCCESS: {
            return {
                ...state,
                categoryList: action.payload,
                selectedCategoryRoute: action.payload.length ? action.payload[0].categoryRoute : "",
                selectedCategory: action.payload.length ? action.payload[0] : {},
            }
        }
        case ItemListingMap.PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                productList: action.payload.list,
                productCount: action.payload.totalProducts,
            }
        }
        case ItemListingMap.ADD_MORE_PRODUCTS: {
            return {
                ...state,
                productList: [...state.productList, ...action.payload.list],
                productCount: action.payload.totalProducts,
                page: state.page + 1,
            }
        }
        
        case ItemListingMap.PLACE_ORDER_SUCCESS: {
            return {
                ...state,
                // placeOrder: action.payload
            }
        }
        case ItemListingMap.UPDATE_ORDER_SUCCESS: {
            return {
                ...state,
                updateOrder: action.payload
            }
        }
        case ItemListingMap.SET_SELECTED_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload.category,
                selectedCategoryRoute: action.payload.route,
                page: 0,
            }
        }
        default:
            return { ...state }
    }
}

export default itemListingReducer;