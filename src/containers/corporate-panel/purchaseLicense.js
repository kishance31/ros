import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PurchaseLicenseAddBox from '../../components/corporate-panel/purchaseLicense/purchaseLicenseAddBox';
import PurchaseLicenseTable from '../../components/corporate-panel/purchaseLicense/purchaseLicenseTable';
import PurchaseLicensePaymentBox from '../../components/corporate-panel/purchaseLicense/purchaseLicensePaymentBox';
import purchaseLicenseAction from '../../actions/purchaseLicense.action';
import { availableLicenseAsync } from '../../actions/purchaseLicense.action';
import notificationActions from '../../actions/notifications.action';

const PurchaseLicense = () => {

    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const purchaseLicenseList = useSelector(state => state.purchaseLicense.addedLicenseList);

    const availableLicenseList = useSelector(state => state.purchaseLicense.availableLicenseList);


    useEffect((data) => {

        if (availableLicenseList.length === 0) {

            dispatch(availableLicenseAsync(data));
        }
    }, []);

    const dispatch = useDispatch();

    const addLicense = (event) => {
        event.preventDefault();
        const {
            quantity, licenseType
        } = event.target;
        if(!quantity.value) {
            return dispatch(notificationActions.showNotification({
                title: "Add License",
                message: "Please enter quantity.",
                // duration: 7000,
            }));
        }
        const availableLicenseDetails = availableLicenseList.find(license => license.type === licenseType.value);
        const data = {
            ...availableLicenseDetails,
            quantity: parseInt(quantity.value),
            price: quantity.value * availableLicenseDetails.price
        }
        dispatch(purchaseLicenseAction.addLicense(data))
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <PurchaseLicenseAddBox addLicense={addLicense} availableLicenseList={availableLicenseList} />
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <PurchaseLicenseTable purchaseLicenseList={purchaseLicenseList} showPaymentModal={() => setShowPaymentModal(!showPaymentModal)} />
                    </div>
                </div>
            </div>
            <PurchaseLicensePaymentBox isOpen={showPaymentModal} toggleModal={() => setShowPaymentModal(!showPaymentModal)} purchaseLicenseList={purchaseLicenseList} />
        </>
    )
}

export default PurchaseLicense;