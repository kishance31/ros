import axios from 'axios';

export const PurchaseLicenseMap = {
    ADD_LICENSE: "ADD_LICENSE",
    AVAILABLE_LICENSE_START: 'available_license_start',
    AVAILABLE_LICENSE_SUCCESS: 'available_license_success',
    AVAILABLE_LICENSE_ERROR: 'available_license_error',

}

const purchaseLicenseAction = {
    addLicense: (data) => {
        return {
            type: PurchaseLicenseMap.ADD_LICENSE,
            payload: data
        }
    }
}

export const availableLicenseAsync =() => {

    return async (dispatch) => {

        dispatch({
            type: PurchaseLicenseMap.AVAILABLE_LICENSE_START
        });
        let availableLicenseResponse = await axios({
            url: `http://127.0.0.1:4000/api/license/licenseList`,
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        });
        console.log(availableLicenseResponse);
        if (availableLicenseResponse.data.response.responseCode === 200) {
            dispatch({
                type: PurchaseLicenseMap.AVAILABLE_LICENSE_SUCCESS,
                payload:availableLicenseResponse.data.response.licenseList
            })
        } else {
            dispatch({
                type: PurchaseLicenseMap.AVAILABLE_LICENSE_ERROR
            })
        }
    }
}
export default purchaseLicenseAction;