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
            let data = await axios({
                url: `${serverUrl}/admin/cms/getContactUsList`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'tokens': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjMyNTBiZDcxYzA0OTQxODI3ZTIzZWIiLCJlbWFpbCI6ImFkbWluQHJvcy5vcmciLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2MDA0MzI2ODEsImV4cCI6MTYwNDY2NjI4MX0.WYcVMzj2g8rfGR_LJuw6lBp_rdZBOoqJmfjLLF3-F0g'
                }
            });
            if (data.data.response.responseCode === 200) {
                dispatch(homepageContenaction.addContactUs(data.data.response.data))
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
            let data = await axios({
                url: `${serverUrl}/admin/cms/getAboutUsList`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'tokens': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjMyNTBiZDcxYzA0OTQxODI3ZTIzZWIiLCJlbWFpbCI6ImFkbWluQHJvcy5vcmciLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2MDA0MzI2ODEsImV4cCI6MTYwNDY2NjI4MX0.WYcVMzj2g8rfGR_LJuw6lBp_rdZBOoqJmfjLLF3-F0g'
                }
            });
            console.log('data', data);
            if (data.data.response.responseCode === 200) {
                dispatch(homepageContenaction.addAboutUs(data.data.response.data))
            }
        }
        catch (error) {
            console.log('error in About Us');
        }
    }
}
