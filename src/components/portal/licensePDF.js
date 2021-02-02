import React, { useEffect } from 'react'
import ReactDOM, { createPortal } from 'react-dom';
import html2pdf from 'html2pdf.js';
import './invoicePDF.css';
import { logoUrl } from './base64';

const LicensePDF = ({ selectedPDFInvoice, user }) => {
    console.log("user", user);

    console.log(selectedPDFInvoice);

    useEffect(() => {
        if (selectedPDFInvoice) {
            const element = document.querySelector("#portal-license .main-body");
            html2pdf()
                .from(element)
                .save(`License_Invoice_${Date.now()}.pdf`)
        }
    }, [selectedPDFInvoice])

    return ReactDOM, createPortal(

        <div style={{ display: "none" }}>
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
                                                    LICENSE INVOICE
                                            </div>
                                                <div>
                                                    Invoice Generated Date: &nbsp;{new Date(selectedPDFInvoice.createdAt).toLocaleDateString()}&nbsp;
                                                    <br />
                                                    Invoice: &nbsp;{selectedPDFInvoice.orderId}&nbsp;
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
                                            <div style={{ margin: "60px 0 30px" }}>LICENSE INVOICE HISTORY</div>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                            <div className="general_table table-responsive">
                                <table className="table2Style" style={{textAlign: "center"}}>
                                    <thead>
                                        <tr>
                                            <th style={{textAlign: "center"}}>SR&nbsp;NO</th>
                                            {/* <th>ORDER&nbsp;NO</th> */}
                                            {/* <th>ORDER&nbsp;DATE</th> */}
                                            <th style={{textAlign: "center"}}>LICENSE&nbsp;TYPE</th>
                                            <th style={{textAlign: "center"}}>NO&nbsp;OF&nbsp;LICENSE</th>
                                            <th style={{textAlign: "center"}}>SUB&nbsp;TOTAL</th>
                                            <th style={{ width: "180px", textAlign: "center" }}>PAYMENT&nbsp;STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedPDFInvoice.purchasedLicenses.map((orderDetails, idx) => (
                                                <tr>
                                                    <td>{idx + 1}</td>
                                                    <td>{selectedPDFInvoice.licenseDetails.find(emp => emp._id === orderDetails.licenseId).type}</td>
                                                    <td>
                                                        {orderDetails.quantity}
                                                    </td>
                                                    <td>{orderDetails.totalPrice}</td>
                                                    <td >
                                                        <button className="paid_btn"> {selectedPDFInvoice.paymentDone ? "PAID" : "PENDING"}</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        <tr style={{borderTop: "1px solid"}}>
                                            <th style={{textAlign: "center"}}>GRAND&nbsp;TOTAL</th>
                                            <td></td>
                                            <td></td>
                                            <td>{selectedPDFInvoice.purchasedLicenses.reduce((acc, licenseType) => acc + licenseType.totalPrice, 0)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>,
        document.getElementById('portal-license')
    )
}

export default LicensePDF;
