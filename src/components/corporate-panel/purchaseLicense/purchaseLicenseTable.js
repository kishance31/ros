import React from 'react';
import ShadowCard from '../../card/shadowCard';

const PurchaseLicenseTable = (props) => {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Silver</td>
                            <td>13</td>
                            <td>$6000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Silver</td>
                            <td>13</td>
                            <td>$6000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Silver</td>
                            <td>13</td>
                            <td>$6000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-center mt-5">
                <button className="btn_blue" onClick={props.showPaymentModal}>
                    Proceed To Pay
                </button>
            </div>
        </ShadowCard>
    )
}

export default PurchaseLicenseTable;