import { homepageContentMap } from "../actions/homepageContent.action";

const initialState = {
    contactUsDetais: {
        address: "",
        contact: "",
        email: ""
    },
    aboutUsDetais: {
        aboutUsImage: "",
        description: "",
    },
    refreshData: true
};

const homepageContentReducer = (state = initialState, action) => {
    switch (action.type) {
            case homepageContentMap.FETCH_CONTACT_US_DETAILS: {
                return {
                    ...state,
                    contactUsDetais: {
                        address: action.payload.address,
                        contact: action.payload.contact,
                        email: action.payload.email
                    }
                }
            }
            case homepageContentMap.FETCH_ABOUT_US_DETAILS: {
                return {
                    ...state,
                    aboutUsDetais: {
                        aboutUsImage: action.payload.aboutUsImage,
                        description: action.payload.description,
                    }
                }
            }
            default: 
                return {...state}
    }
}

export default homepageContentReducer