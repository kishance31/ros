import React, { useEffect } from 'react';
import { licenseOrderHistoryAsync } from "../../actions/purchaseLicense.action";
import { useSelector, useDispatch } from 'react-redux';

const LicenseOrderHistory = () => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);

    const licenseOrderHistory = useSelector(state => state.purchaseLicense.licenseOrderHistory)

    useEffect(() => {
        dispatch(licenseOrderHistoryAsync(user._id, user.tokens))
    }, [])

    return (
        <div>
            <div class="tab-pane fade show" id="license_order_history" role="tabpanel" aria-labelledby="">
                <div class="general_table table-responsive">
                    <table class="">
                        <thead>
                            <tr>
                                <th>Sr&nbsp;No</th>
                                <th>ORDER&nbsp;NO</th>
                                <th>ORDER&nbsp;DATE</th>
                                <th>LICENSE&nbsp;TYPE</th>
                                <th>NO&nbsp;OF&nbsp;LICENSE</th>
                                <th>SUB&nbsp;TOTAL</th>
                                <th>GRAND&nbsp;TOTAL</th>
                                <th>DOWNLOAD&nbsp;INVOICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                licenseOrderHistory.map((item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.orderId}</td>
                                        <td>{new Date(item.createdAt).toLocaleString()}</td>
                                        <td>
                                            {
                                                item.purchasedLicenses.map((licenseType) =>
                                                    <div>{licenseType.type}</div>
                                                )
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.purchasedLicenses.map((licenseType) =>
                                                    <div>{licenseType.quantity}</div>
                                                )
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.purchasedLicenses.map((licenseType) =>
                                                    <div>{licenseType.totalPrice}</div>
                                                )
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.purchasedLicenses.reduce((acc, licenseType) => acc + licenseType.totalPrice, 0)
                                            }
                                        </td>
                                        <td>
                                            <a href="" class="download"><img src={require(`../../assets/images/download.svg`)} alt="" />DOWNLOAD</a>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LicenseOrderHistory;