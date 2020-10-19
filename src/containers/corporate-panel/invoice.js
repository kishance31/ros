import React, { useState, useEffect, useContext } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import InvoiceViewDetailsBox from '../../components/corporate-panel/invoice/invoiceViewDetailsBox';
import { getInvoiceListAsync, confirmRecurringPayment, InvoiceActions } from '../../actions/invoice.action';
import PaymentBox from '../../components/corporate-panel/invoice/paymentBox';
import { OverlayContext } from '../../context/loadingOverlay.context';
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';

const Invoice = () => {

    const dispatch = useDispatch();

    const { toggleOverlay } = useContext(OverlayContext);

    const [visibleViewModal, setVisibleViewModal] = useState(false);
    const [visiblePayModal, setVisiblePayModal] = useState(false);

    const [isReccuring, setIsReccuring] = useState(false)
    const [selectedInvoice, setSelectedInvoice] = useState(null);

    const { invoiceList, totalRecords, refreshList, isLoading, batchNumber, limit } = useSelector(state => state.invoice, shallowEqual);

    const onPageChange = (currentBatch) => {
        dispatch(InvoiceActions.setInvoicePage(currentBatch || batchNumber));
    }

    const { handleBatchChange } =
        usePaginationHook(5, batchNumber, onPageChange);

    useEffect(() => {
        if (refreshList) {
            dispatch(getInvoiceListAsync(isReccuring));
        }
    }, [refreshList])

    const onInvoiceTypeChange = (e) => {
        if (e.target.value === "license") {
            return
        }
        setIsReccuring(e.target.value === "true" ? true : false);
        dispatch(getInvoiceListAsync(e.target.value === "true" ? true : false));
    }

    const onConfirmPayment = (data) => {
        console.log(selectedInvoice)
        if (data && selectedInvoice) {
            dispatch(confirmRecurringPayment(data, selectedInvoice))
            setVisiblePayModal(false);
            setSelectedInvoice(null);
        }
    }

    return (
        <>
            <div className="top_bar mb-0">
                <form className="w-100">
                    <div className="row">
                        <div className="col-lg-2 col-md-4">
                            <div className="input-group">
                                <label>Invoice Type</label>
                                <select
                                    title="SELECT"
                                    className="selectpicker form-control"
                                    value={isReccuring}
                                    onChange={onInvoiceTypeChange}
                                >
                                    <option value={false}>First payment</option>
                                    <option value={true}>Recurring</option>

                                </select>
                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-md-4">
                            <div className="input-group">
                                <label>Select Year</label>
                                <select title="SELECT" className="selectpicker form-control">
                                    <option>Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className="input-group">
                                <label>Select Month</label>
                                <select title="SELECT" className="selectpicker form-control">
                                    <option>Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className="input-group">
                                <label>Invoice</label>
                                <select title="SELECT" className="selectpicker form-control">
                                    <option>New Order</option>
                                    <option>Recurring</option>
                                </select>
                            </div>
                        </div> */}
                    </div>
                </form>
            </div>

            <div className="container-fluid">
                <div className="shadow_box">
                    <div className="general_table table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr&nbsp;No</th>
                                    <th>EMPLOYEE&nbsp;NAME</th>
                                    <th>ORDER&nbsp;DATE</th>
                                    <th>ORDER&nbsp;NO</th>
                                    <th>INVOICE&nbsp;DATE</th>
                                    <th>AMOUNT</th>
                                    <th className="text-center">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    invoiceList.length ? (

                                        invoiceList.map((invoice, index) => (
                                            <tr key={invoice.invoiceDetails.invoiceNo}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {invoice.employeeDetails[0].firstName + " " + invoice.employeeDetails[0].lastName}
                                                </td>
                                                <td>{new Date(invoice.firstInvoiceDate).toLocaleString()}</td>
                                                <td>{invoice.orderId}</td>
                                                <td>{new Date(invoice.invoiceDetails.invoiceDate).toLocaleString()}</td>
                                                <td>$
                                                    {
                                                        isReccuring ? (
                                                            <>
                                                                {
                                                                    parseFloat((
                                                                        (
                                                                            (invoice.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) - 
                                                                            (((invoice.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) / 12)
                                                                            * invoice.firstPaymentTerm)) / invoice.recurringMonthsNo
                                                                        )
                                                                    ).toFixed(2)
                                                                }
                                                            </>
                                                        ) : (
                                                                <>
                                                                    {
                                                                        parseFloat((
                                                                            ((invoice.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) / 12)
                                                                            * invoice.firstPaymentTerm))
                                                                            .toFixed(2)
                                                                    }
                                                                </>
                                                            )
                                                    }
                                                </td>
                                                <td className="text-center">
                                                    <div className="action_btn_wrap">

                                                        <button className="btn_action btn_border"
                                                            onClick={() => {
                                                                setSelectedInvoice(invoice)
                                                                setVisibleViewModal(true);
                                                            }}>View</button>


                                                        <button className="btn_action pink">Download</button>
                                                        {
                                                            isReccuring && !invoice.invoiceDetails.paymentDone ? (
                                                                <button className="btn_action blue"
                                                                    onClick={() => {
                                                                        setSelectedInvoice(invoice);
                                                                        setVisiblePayModal(true);
                                                                    }}>Pay</button>
                                                            ) : null
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                            <tr className="text-center">
                                                <td colSpan={6}>
                                                    No invoice created yet.
                                                    </td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </table>
                        {
                            invoiceList.length ? (
                                <div style={{ marginTop: 20, float: "right" }}>
                                    <BasicPagination
                                        totalRecords={totalRecords}
                                        limit={limit}
                                        batch={batchNumber}
                                        onBatchChange={handleBatchChange}
                                    />
                                </div>
                            ) : null
                        }
                        <InvoiceViewDetailsBox
                            isOpen={visibleViewModal}
                            toggleModal={() => {
                                setVisibleViewModal(!visibleViewModal);
                            }}
                            invoice={selectedInvoice}
                        />
                    </div>
                </div>
            </div>
            <PaymentBox
                isOpen={visiblePayModal}
                toggleModal={() => {
                    setVisiblePayModal(!visiblePayModal);
                }}
                invoice={selectedInvoice}
                toggleOverlay={toggleOverlay}
                onConfirmPayment={onConfirmPayment}
            />
        </>
    );
};

export default Invoice;
