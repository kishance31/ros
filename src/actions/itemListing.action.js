import axios from 'axios';

export const ItemListingMap = {
    SAVE_CATEGORY_START: 'SAVE_CATEGORY_START',
    SAVE_CATEGORY_SUCCESS: 'SAVE_CATEGORY_SUCCESS',
    SAVE_CATEGORY_ERROR: 'SAVE_CATEGORY_ERROR',
    CATEGORY_LIST_START: 'CATEGORY_LIST_START',
    CATEGORY_LIST_SUCCESS: 'CATEGORY_LIST_SUCCESS',
    CATEGORY_LIST_ERROR: 'CATEGORY_LIST_ERROR',
    SAVE_SUBCATEGORY_START: 'SAVE_SUBCATEGORY_START ',
    SAVE_SUBCATEGORY_SUCCESS: 'SAVE_SUBCATEGORY_SUCCESS ',
    SAVE_SUBCATEGORY_ERROR: 'SAVE_SUBCATEGORY_ERROR ',
}

export const itemListingAction = {

}

export const saveCategoryAsync = (tokens, category_name, status) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.SAVE_CATEGORY_START
            });
            let saveCategoryResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/category/saveCategory`,
                method: 'POST',
                headers: {
                    tokens
                },
                data: {
                    category_name, status
                }
            });
            console.log("::::::::", saveCategoryResponse);
            if (saveCategoryResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.SAVE_CATEGORY_SUCCESS,
                    //payload: saveCategoryResponse
                })
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.SAVE_CATEGORY_ERROR
            })
        }
    }
}

export const categoryListAsync = (tokens) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.CATEGORY_LIST_START
            });
            let categoryListResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/category/getCategoryList`,
                method: 'GET',
                headers: {
                    tokens
                },
            });
            if (categoryListResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.CATEGORY_LIST_SUCCESS,
                    payload: categoryListResponse.data.response.data
                })
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.CATEGORY_LIST_ERROR
            })
        }
    }
}

export const saveSubCategoryAsync = (category_id, subcategory_name, tokens) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ItemListingMap.SAVE_SUBCATEGORY_START
            });
            let saveSubCategoryResponse = await axios({
                url: `http://127.0.0.1:4000/api/corporate-admin/sub-category/saveSubCategory`,
                method: 'POST',
                headers: {
                    tokens
                },
                data: {
                    category_id, subcategory_name
                }
            });
            console.log("::::::::", saveSubCategoryResponse);
            if (saveSubCategoryResponse.data.response.responseCode === 200) {
                dispatch({
                    type: ItemListingMap.SAVE_SUBCATEGORY_SUCCESS,
                    //payload: saveSubCategoryResponse
                })
            }
        }
        catch (error) {
            dispatch({
                type: ItemListingMap.SAVE_SUBCATEGORY_ERROR
            })
        }
    }
}

