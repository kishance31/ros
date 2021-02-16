import React, { useEffect } from 'react'
import ReactDOM, { createPortal } from 'react-dom';
import html2pdf from 'html2pdf.js';
import './invoicePDF.css';
import { logoUrl } from './base64';

const InvoicePDF = ({ selectedPDFInvoice, user }) => {
    console.log("user", user);

    console.log(selectedPDFInvoice);

    useEffect(() => {
        if (selectedPDFInvoice) {
            const element = document.querySelector("#portal-root .main-body");
            var opt = {
                margin: 0,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            html2pdf()
                .set(opt)
                .from(element)
                .save(`${selectedPDFInvoice.isReccuring ? "Recurring" : "Order"}_Invoice_${Date.now()}.pdf`)
        }
    }, [selectedPDFInvoice])

    return ReactDOM, createPortal(

        <div style={{ display: "none" }} className="order-invoice">
            {
                user && selectedPDFInvoice ? (
                    <div className="main-body">
                        <div>
                            <table className="tableStyle">
                                <thead>
                                    <tr>
                                        <td>
                                            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                                                <img className="ROS-LOGO" style={{ width: "250px" }} src={logoUrl} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                                <div style={{ background: "#002060", color: "#fff", padding: "5px 10px", fontSize: "20px" }}>
                                                    {selectedPDFInvoice.isReccuring ? "RECURRING" : "ORDER"} INVOICE
                                            </div>
                                                <div>
                                                    Invoice Generated Date: &nbsp;{new Date(selectedPDFInvoice.invoiceDate).toLocaleDateString()}&nbsp;
                                                    <br />
                                                    Invoice: &nbsp;{selectedPDFInvoice.invoiceNo}&nbsp;
                                            </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ display: "block", marginBottom: "15px" }}> COMPANY PROFILE: </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", width: "60%", marginBottom: "15px" }}>
                                                <span style={{ marginRight: "30px" }}> Corporate Name:&nbsp;{user.companyName} </span>
                                                {/* <span> Corporate Register #: </span> */}
                                                {/* <span> Corporate Tax No: </span> */}
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", width: " 37%", marginBottom: "15px" }}>
                                                <span> Corporate Email #:&nbsp;{user.email} </span>
                                                <span> Corporate Contact No:&nbsp; {user.officeContactNo}</span>
                                            </div>
                                            <div style={{ margin: "60px 0 30px" }}>{selectedPDFInvoice.isReccuring ? "RECURRING" : "ORDER"} INVOICE HISTORY</div>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                            <div className="general_table table-responsive">
                                <table className="table2Style">
                                    <thead>
                                        <tr>
                                            <th>SR&nbsp;NO</th>
                                            <th>EMPLOYEE&nbsp;NAME</th>
                                            <th>ORDER&nbsp;DATE</th>
                                            <th>ORDER&nbsp;NO</th>
                                            <th>INVOICE&nbsp;NO</th>
                                            <th>AMOUNT</th>
                                            <th style={{ width: "180px" }}>PAYMENT&nbsp;STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedPDFInvoice.orderDetails.map((orderDetails, idx) => (
                                                <tr>
                                                    <td>{idx + 1}</td>
                                                    <td>{selectedPDFInvoice.employeeDetails.find(emp => emp._id === orderDetails.employeeId).firstName}&nbsp;{selectedPDFInvoice.employeeDetails.find(emp => emp._id === orderDetails.employeeId).lastName}</td>
                                                    <td>
                                                        {new Date(orderDetails.orderDate).toLocaleDateString()}
                                                    </td>
                                                    <td>ORDER NO</td>
                                                    <td>INVOICE NO</td>
                                                    <td>
                                                        {
                                                            orderDetails.products.map(prd => (
                                                                <table>
                                                                    <tbody>
                                                                        <tr className="no-border">
                                                                            <td>{prd.firstTimeCost}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            ))
                                                        }
                                                    </td>
                                                    <td>
                                                        <button className="paid_btn"> {selectedPDFInvoice.paymentDone ? "PAID" : "PENDING"}</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            {
                                                !selectedPDFInvoice.paymentDone ? (
                                                    <td colspan="5" style={{ textAlign: "right" }}>TOTAL OUTSTANDING PAYMENT: {selectedPDFInvoice.recurringCost} $</td>
                                                ) : null
                                            }
                                        </tr>
                                        <tr>
                                            {
                                                !selectedPDFInvoice.paymentDone ? (
                                                    <td colSpan="6">
                                                        <div style={{ marginTop: "50px" }}>Note: Make use of the available online payment options in Invoice
                                                            {">>"}
                                                            {selectedPDFInvoice.isReccuring ? "RECURRING" : "ORDER"} invoice payment
                                                            tab
                                                        </div>
                                                    </td>
                                                ) : null
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>,
        document.getElementById('portal-root')
    )
}

export default InvoicePDF;
