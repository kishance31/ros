import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PurchaseLicenseAddBox from '../../components/corporate-panel/purchaseLicense/purchaseLicenseAddBox';
import PurchaseLicenseTable from '../../components/corporate-panel/purchaseLicense/purchaseLicenseTable';
import PurchaseLicensePaymentBox from '../../components/corporate-panel/purchaseLicense/purchaseLicensePaymentBox';
import purchaseLicenseAction from '../../actions/purchaseLicense.action';

const PurchaseLicense = () => {

    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const [addedLicenseList, setAddedLicenseList] = useState([]);

    const purchaseLicenseList = useSelector(state => state.purchaseLicense.addedLicenseList);

    useEffect(() => {
        setAddedLicenseList([
            { licenseType: "SLIVER", price: 5000 },
            { licenseType: "GOLD", price: 8000 },
            { licenseType: "PLATINUM", price: 9000 }
        ])
    }, []);

    const dispatch = useDispatch();

    const addLicense = (event) => {
        event.preventDefault();
        const {
            quantity, licenseType
        } = event.target;
        const addLicenseDetails = addedLicenseList.find(license => license.licenseType === licenseType.value);
        console.log(addLicenseDetails);
        const data = {
            ...addLicenseDetails,
            quantity: parseInt(quantity.value),
            price: quantity.value * addLicenseDetails.price
        }
        dispatch(purchaseLicenseAction.addLicense(data))
    }
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <PurchaseLicenseAddBox addLicense={addLicense} addedLicenseList={addedLicenseList} />
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