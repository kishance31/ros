import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PurchaseLicenseAddBox from '../../components/corporate-panel/purchaseLicense/purchaseLicenseAddBox';
import PurchaseLicenseTable from '../../components/corporate-panel/purchaseLicense/purchaseLicenseTable';
import PurchaseLicensePaymentBox from '../../components/corporate-panel/purchaseLicense/purchaseLicensePaymentBox';
import purchaseLicenseAction from '../../actions/purchaseLicense.action';
import notificationActions from '../../actions/notifications.action';
import { availableLicenseAsync, orderIdAsync, purchaseLicenseAsync } from '../../actions/purchaseLicense.action';
import { OverlayContext } from '../../context/loadingOverlay.context';

const PurchaseLicense = () => {

    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const purchaseLicenseList = useSelector(state => state.purchaseLicense.addedLicenseList);

    const availableLicenseList = useSelector(state => state.purchaseLicense.availableLicenseList);

    const orderId = useSelector(state => state.purchaseLicense.orderId)

    const user = useSelector(state => state.auth.user)

    const dispatch = useDispatch();

    const { toggleOverlay } = useContext(OverlayContext);

    useEffect(() => {
        if (availableLicenseList.length === 0) {
            dispatch(availableLicenseAsync());
        }
    }, []);

    useEffect(() => {
        if (orderId === '') {
            dispatch(orderIdAsync(user._id, user.tokens));
        }
    }, [orderId]);

    const addLicense = (event) => {
        event.preventDefault();
        const {
            quantity, licenseType
        } = event.target;
        if (!quantity.value) {
            return dispatch(notificationActions.showNotification({
                title: "Add License",
                message: "Please enter quantity.",
                color: 'error',
                // duration: 7000,
            }));
        }
        if (quantity.value < 1) {
            return dispatch(notificationActions.showNotification({
                title: "Add License",
                message: "Quantity must be greater than 0.",
                color: 'error',
                // duration: 7000,
            }));
        }
        if (quantity.value > 100) {
            return dispatch(notificationActions.showNotification({
                title: "Add License",
                message: "Quantity must not be more than 100.",
                color: 'error',
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

    const removeAddedLicense = (type) => {
        dispatch(purchaseLicenseAction.deleteLicense(type))
    }

    const payPurchaseLicenses = (data) => {
        dispatch(purchaseLicenseAsync(orderId, purchaseLicenseList, user.tokens, {a: 1}));
        setShowPaymentModal(!showPaymentModal);
        dispatch(notificationActions.showNotification({
            title: "License purchased successfully",
            message: `Licenses are purchased successfully.`,
            color: 'success',
            // duration: 7000,
        }));
    }

    const openPaymentModalBox = () => {
        if (!purchaseLicenseList.length) {
            return dispatch(notificationActions.showNotification({
                title: "Add License",
                message: "No license added. Add a license to proceed.",
                color: 'error',
                // duration: 7000,
            }));
        }
        setShowPaymentModal(!showPaymentModal)
        toggleOverlay(true);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <PurchaseLicenseAddBox addLicense={addLicense} availableLicenseList={availableLicenseList} orderId={orderId} companyName={user.companyName} />
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <PurchaseLicenseTable
                            purchaseLicenseList={purchaseLicenseList}
                            showPaymentModal= {openPaymentModalBox}
                            removeAddedLicense={removeAddedLicense}
                        />
                    </div>
                </div>
            </div>
            <PurchaseLicensePaymentBox
                payPurchaseLicenses={payPurchaseLicenses}
                isOpen={showPaymentModal}
                toggleModal={() => setShowPaymentModal(!showPaymentModal)}
                purchaseLicenseList={purchaseLicenseList}
                toggleOverlay={toggleOverlay}
            />
        </>
    )
}

export default PurchaseLicense;