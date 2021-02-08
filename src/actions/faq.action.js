import axios from 'axios';
import notificationActions from './notifications.action';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const FAQMap = {
    GET_FAQS_START: 'GET_FAQS_START',
    GET_FAQS_SUCCESS: 'GET_FAQS_SUCCESS',
    GET_FAQS_ERROR: 'GET_FAQS_ERROR',
    GET_SOCIAL_LINKS_START: 'GET_SOCIAL_LINKS_START',
    GET_SOCIAL_LINKS_SUCCESS: 'GET_SOCIAL_LINKS_SUCCESS',
    GET_SOCIAL_LINKS_ERROR: 'GET_SOCIAL_LINKS_ERROR',
}

export const getFAQSAsync = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FAQMap.GET_FAQS_START
            });
            let { data } = await axios({
                url: `${serverUrl}/admin/cms/getFAQS`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (data.response && data.response.responseCode === 200) {
                return dispatch({
                    type: FAQMap.GET_FAQS_SUCCESS,
                    payload: data.response
                })
            }
        } catch (error) {
            dispatch({
                type: FAQMap.GET_FAQS_ERROR
            })
            dispatch(notificationActions('error', "Error while updating", 3000))
        }
    }
}

export const getSocialLinksAsync = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FAQMap.GET_SOCIAL_LINKS_START
            });
            let { data } = await axios({
                url: `${serverUrl}/admin/cms/getSocialMediaLinks`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (data.response && data.response.responseCode === 200) {
                return dispatch({
                    type: FAQMap.GET_SOCIAL_LINKS_SUCCESS,
                    payload: data.response.data
                })
            }
        } catch (error) {
            dispatch({
                type: FAQMap.GET_SOCIAL_LINKS_ERROR
            })
            dispatch(notificationActions('error', "Error while updating", 3000))
        }
    }
}