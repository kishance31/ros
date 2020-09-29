import { ItemListingMap } from '../actions/itemListing.action';

const initialState = {
    saveCategory: [],
    categoryList: [],
    saveSubCategory: []
}

const itemListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ItemListingMap.SAVE_CATEGORY_SUCCESS: {
            return {
                ...state,
                saveCategory: action.payload
            }
        }
        case ItemListingMap.CATEGORY_LIST_SUCCESS: {
            return {
                ...state,
                categoryList: action.payload
            }
        }
        case ItemListingMap.SAVE_SUBCATEGORY_SUCCESS: {
            return {
                ...state,
                saveSubCategory: action.payload
            }
        }
        default:
            return { ...state }
    }
}

export default itemListingReducer;