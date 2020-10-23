import axios from 'axios';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();
export const homepageContentMap = {
    FETCH_CONTACT_US_DETAILS: 'FETCH_CONTACT_US_DETAILS',
    FETCH_ABOUT_US_DETAILS: 'FETCH_ABOUT_US_DETAILS'
}

const homepageContenaction = {
    addContactUs: (contactUsDetails) => {
        return {
            type: homepageContentMap.FETCH_CONTACT_US_DETAILS,
            payload: contactUsDetails,
        }
    },
    addAboutUs: (aboutUsDetails) => {
        return {
            type: homepageContentMap.FETCH_ABOUT_US_DETAILS,
            payload: aboutUsDetails,
        }
    },
}

export default homepageContenaction;

export const fetchConstactUsDetailsAsync = () => {
    return async (dispatch) => {
        try {
            let {data} = await axios({
                url: `${serverUrl}/admin/cms/getContactUsList`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                }
            });
            if (data.response.responseCode === 200) {
                dispatch(homepageContenaction.addContactUs(data.response.data))
            }
        }
        catch (error) {
            console.log('error in Contact Us');
        }
    }
}

export const fetchAboutUsDetailsAsync = () => {
    return async (dispatch) => {
        try {
            let {data} = await axios({
                url: `${serverUrl}/admin/cms/getAboutUsList`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                }
            });
            console.log('data', data);
            if (data.response.responseCode === 200) {
                dispatch(homepageContenaction.addAboutUs(data.response.data))
            }
        }
        catch (error) {
            console.log('error in About Us');
        }
    }
}
