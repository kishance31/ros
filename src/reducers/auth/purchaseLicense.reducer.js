import { PurchaseLicenseMap } from '../../actions/purchaseLicense.action';

const initialState = {
    addedLicenseList: [],
}

const purchaseLicenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case PurchaseLicenseMap.ADD_LICENSE: {
            let newLicenseList = [];
            let { payload } = action;
            let existLicense = state.addedLicenseList.find(license => license.licenseType == payload.licenseType);
            if (existLicense) {
                newLicenseList = state.addedLicenseList.map((license) => {
                    if (license.licenseType === payload.licenseType) {
                        license.quantity += payload.quantity;
                        license.price += payload.price;
                    }
                    return license;
                });
            } else {
                newLicenseList = [
                    ...state.addedLicenseList,
                    { ...action.payload },
                ]
            }
            return {
                ...state,
                addedLicenseList: newLicenseList
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}
export default purchaseLicenseReducer;