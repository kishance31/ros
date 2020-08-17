export const PurchaseLicenseMap = {
    ADD_LICENSE: "ADD_LICENSE",
}

const purchaseLicenseAction = {
    addLicense: (data) => {
        return {
            type: PurchaseLicenseMap.ADD_LICENSE,
            payload: data
        }
    }
}
export default purchaseLicenseAction;