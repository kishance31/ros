import { PurchaseLicenseMap } from '../actions/purchaseLicense.action';

const initialState = {
    addedLicenseList: [],
    availableLicenseList: [],
    orderId: "",
}

const purchaseLicenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case PurchaseLicenseMap.ADD_LICENSE: {
            let newLicenseList = [];
            let { payload } = action;
            console.log(payload);
            let existLicense = state.addedLicenseList.find(license => license.type === payload.type);
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
            return {
                ...state,
                addedLicenseList: newLicenseList
            }
        }
        case PurchaseLicenseMap.AVAILABLE_LICENSE_SUCCESS: {
            return {
                ...state,
                availableLicenseList: action.payload
            }
        }
        case PurchaseLicenseMap.ORDER_ID_SUCCESS: {
            return {
                ...state,
                orderId: action.payload
            }
        }
        case PurchaseLicenseMap.PURCHASE_LICENSE_SUCCESS: {
            return {
                ...state,
                addedLicenseList: [],
                orderId: ""
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