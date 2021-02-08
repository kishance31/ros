import { FAQMap } from '../actions/faq.action';

const initialState = {
    FAQList: [],
    refreshFAQData: true,
    isLoading: false,
    refreshLinkData: true,
    socialLinksList: {}
}

const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAQMap.GET_FAQS_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FAQMap.GET_FAQS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                FAQList: action.payload.list,
                refreshFAQData: false,
            }
        }
        case FAQMap.GET_FAQS_ERROR: {
            return {
                ...state,
                isLoading: false
            }
        }
        case FAQMap.GET_SOCIAL_LINKS_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FAQMap.GET_SOCIAL_LINKS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                socialLinksList: action.payload,
                refreshLinkData: false,
            }
        }
        case FAQMap.GET_SOCIAL_LINKS_ERROR: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return { ...state }
    }
}

export default faqReducer;
