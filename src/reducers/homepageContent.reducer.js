import { homepageContentMap } from "../actions/homepageContent.action";

const initialState = {
    contactUsDetais: {},
    aboutUsDetais: {},
    refreshData: true
};

const homepageContentReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            case homepageContentMap.FETCH_CONTACT_US_DETAILS: {
                return {
                    ...state,
                    contactUsDetais: action.payload
                }
            }
            case homepageContentMap.FETCH_ABOUT_US_DETAILS: {
                return {
                    ...state,
                    aboutUsDetais: action.payload
                }
            }
            return { ...state }
    }
}

export default homepageContentReducer