import React, { useState } from 'react';
import PurchaseLicenseAddBox from '../../components/corporate-panel/purchaseLicense/purchaseLicenseAddBox';
import PurchaseLicenseTable from '../../components/corporate-panel/purchaseLicense/purchaseLicenseTable';
import PurchaseLicensePaymentBox from '../../components/corporate-panel/purchaseLicense/purchaseLicensePaymentBox';


const PurchaseLicense = () => {

    const [showPaymentModal, setShowPaymentModal] = useState(false);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <PurchaseLicenseAddBox />
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <PurchaseLicenseTable showPaymentModal={() => setShowPaymentModal(!showPaymentModal)} />
                    </div>
                </div>
            </div>

            <PurchaseLicensePaymentBox isOpen={showPaymentModal} toggleModal={() => setShowPaymentModal(!showPaymentModal)} />
        </>
    )
}

export default PurchaseLicense;