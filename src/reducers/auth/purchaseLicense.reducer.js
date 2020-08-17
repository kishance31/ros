import { PurchaseLicenseMap } from '../../actions/purchaseLicense.action';

const initialState = {
    addedLicenseList: [],
    availableLicenseList:[]
}

const purchaseLicenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case PurchaseLicenseMap.ADD_LICENSE: {
            let newLicenseList = [];
            let { payload } = action;
            console.log(payload);
            let existLicense = state.addedLicenseList.find(license => license.type == payload.type);
            if (existLicense) {
                newLicenseList = state.addedLicenseList.map((license) => {
                    if (license.type === payload.type) {
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
            console.log(newLicenseList);
            return {
                ...state,
                addedLicenseList: newLicenseList
            }
        }
        case PurchaseLicenseMap.AVAILABLE_LICENSE_SUCCESS:{
            return {
                ...state,
                availableLicenseList: action.payload
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