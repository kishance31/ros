import React, { useState } from 'react';
import { InvoiceList } from '../../utils/constants';
import InvoiceViewDetailsBox from '../../components/corporate-panel/invoice/invoiceViewDetailsBox';
import InvoicePayDetailsBox from '../../components/corporate-panel/invoice/invoicePayDetailsBox';

const Invoice = () => {

    const [visibleViewModal, setVisibleViewModal] = useState(false);
    const [visiblePayModal, setVisiblePayModal] = useState(false);

    return (
        <>
            <div className="top_bar mb-0">
                <form className="w-100">
                    <div className="row">
                        <div className="col-lg-2 col-md-4">
                            <div className="input-group">
                                <label>Invoice Type</label>
                                <select title="SELECT" className="selectpicker form-control">
                                    <option>License</option>
                                    <option>Ordered</option>
                                    <option>Pending</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
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
                        </div>
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
                                    <th>INVOICE&nbsp;NO</th>
                                    <th>INVOICE&nbsp;DATE</th>
                                    <th>INVOICE&nbsp;TYPE</th>
                                    <th>AMOUNT</th>
                                    <th className="text-center">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    InvoiceList.map((invoice, index) => (
                                        <tr key={invoice.invoiceNo}>
                                            <td>{index + 1}</td>
                                            <td>{invoice.invoiceNo}</td>
                                            <td>{invoice.invoiceDate}</td>
                                            <td>{invoice.invoiceType}</td>
                                            <td>${invoice.invoiceAmount}</td>
                                            <td className="text-center">
                                                <div className="action_btn_wrap">

                                                    <button className="btn_action btn_border"
                                                        onClick={() => {
                                                            setVisibleViewModal(true);
                                                        }}>View</button>
                                                    <InvoiceViewDetailsBox
                                                        isOpen={visibleViewModal}
                                                        toggleModal={() => {
                                                            setVisibleViewModal(!visibleViewModal);
                                                        }}
                                                    />

                                                    <button className="btn_action pink">Download</button>

                                                    <button className="btn_action blue"
                                                        onClick={() => {
                                                            setVisiblePayModal(true);
                                                        }}>Pay</button>
                                                    <InvoicePayDetailsBox
                                                        isOpen={visiblePayModal}
                                                        toggleModal={() => {
                                                            setVisiblePayModal(!visiblePayModal);
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Invoice;
