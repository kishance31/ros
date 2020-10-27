import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import purchaseLicenseAction, { licenseOrderHistoryAsync } from "../../actions/purchaseLicense.action";
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';
import { generateLicensePDF } from '../../hooks/generateLicensePDF';

const LicenseOrderHistory = () => {

    
    const dispatch = useDispatch();
    
    const user = useSelector(state => state.auth.user, shallowEqual);
    
    const licenseOrderHistory = useSelector(state => state.purchaseLicense.licenseOrderHistory, shallowEqual);
    const licenseOrderRecords = useSelector(state => state.purchaseLicense.licenseOrderRecords);
    const batchNumber = useSelector(state => state.purchaseLicense.batchNumber);
    const refrestOrderHistory = useSelector(state => state.purchaseLicense.refrestOrderHistory);

    const onPageChange = (currentBatch) => {
        dispatch(purchaseLicenseAction.setBatchNumber(currentBatch || batchNumber));
        dispatch(purchaseLicenseAction.refreshOrderHistory());
    }
    
    const { limit, handleBatchChange } = usePaginationHook(5, batchNumber, onPageChange)

    useEffect(() => {
        if (refrestOrderHistory) {
            dispatch(licenseOrderHistoryAsync(user._id, user.tokens, limit, batchNumber));
        }
    }, [refrestOrderHistory]);

    return (
        <div>
            <div className="tab-pane fade show" id="license_order_history" role="tabpanel" aria-labelledby="">
                <div className="general_table table-responsive">
                    {
                        licenseOrderHistory.length === 0 ? (
                            <div className="text-center">
                                <span>
                                    No License Order History
                                </span>
                            </div>
                        ) : (
                                <>
                                    <table>
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
                                                    <tr key={index}>
                                                        <td>{(limit * (batchNumber - 1)) + (index + 1)}</td>
                                                        <td>{item.orderId}</td>
                                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                                        <td>
                                                            {
                                                                item.licenseDetails.map((licenseType, key) =>
                                                                    <div key={key}>{licenseType.type}</div>
                                                                )
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.purchasedLicenses.map((licenseType, key) =>
                                                                    <div key={key}>{
                                                                        licenseType.quantity < 10 ? 
                                                                            "0" + licenseType.quantity :
                                                                            licenseType.quantity
                                                                    }</div>
                                                                )
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.purchasedLicenses.map((licenseType, key) =>
                                                                    <div key={key}>${licenseType.totalPrice}</div>
                                                                )
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.purchasedLicenses.reduce((acc, licenseType) => acc + licenseType.totalPrice, 0)
                                                            }
                                                        </td>
                                                        <td>
                                                            <a href="#" className="download"
                                                                onClick={() => generateLicensePDF({data: item, corporate: user})}
                                                            >
                                                                <img src={require(`../../assets/images/download.svg`)} alt="" />DOWNLOAD</a>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    <div style={{ marginTop: 20, float: "right" }}>
                                        <BasicPagination
                                            totalRecords={licenseOrderRecords}
                                            limit={limit}
                                            batch={batchNumber}
                                            onBatchChange={handleBatchChange}
                                        />
                                    </div>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default LicenseOrderHistory;