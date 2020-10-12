import { productListMap } from '../actions/corporateProductView.action';

const initialState = {
    productList: [],
    productCount: 0,
    page: 1,
    limit: 5,
    refreshList: true,
    categoryList: [],
}

const corporateProductViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case productListMap.PRODUCTVIEW_LIST_SUCCESS: {
            return {
                ...state,
                productList: action.payload.list,
                productCount: action.payload.totalProducts,
                refreshList: false,
            }
        }
        case productListMap.REFRESH_PRODUCTVIEW: {
            return {
                ...state,
                refreshList: true,
                page: action.payload ? action.payload : state.page
            }
        }
        case productListMap.SET_PAGE_NUMBER: {
            return {
                ...state,
                page: action.payload
            }
        }
        case productListMap.DISPLAY_CATEGORY_DATA: {
            return {
                ...state,
                categoryList: action.payload
            }
        }
        default:
            return { ...state }
    }
}

export default corporateProductViewReducer;