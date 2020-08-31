import React from 'react';
import ShadowCard from '../../card/shadowCard';

const PurchaseLicenseTable = (props) => {

    const { purchaseLicenseList, showPaymentModal, removeAddedLicense } = props;

    return (
        <ShadowCard className="ml-0 ml-xl-3">
            <div className="general_table table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Sr&nbsp;No</th>
                            <th>License&nbsp;No</th>
                            <th>No&nbsp;of&nbsp;License</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            purchaseLicenseList.length ? (
                                purchaseLicenseList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.type}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td 
                                                style={{cursor: 'pointer'}}
                                                onClick={() => removeAddedLicense(item.type)}
                                            >
                                                X
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                    <tr>
                                        <td colSpan={5}>
                                            No license added. Add a license
                                    </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            <div className="text-center mt-5">
                <button className="btn_blue" onClick={showPaymentModal}  >
                    Proceed To Pay
                </button>
            </div>
        </ShadowCard>
    )
}

export default PurchaseLicenseTable;
