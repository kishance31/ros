import React, { useEffect } from 'react'
import ReactDOM, { createPortal } from 'react-dom';
import html2pdf from 'html2pdf.js';
import './invoicePDF.css';
import {logoUrl} from './base64';

const InvoicePDF = ({ selectedPDFInvoice, user }) => {
    console.log("user", user);

    useEffect(() => {
        if (selectedPDFInvoice) {
            const element = document.querySelector("#portal-root .main-body");
            html2pdf()
                .from(element)
                .save(`Order_Invoice_${Date.now()}.pdf`)
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
                                                    Invoice Generated Date:{new Date(selectedPDFInvoice.orderDetails.orderDate).toLocaleDateString()}&nbsp;
                                            Invoice:
                                            </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ display: "block", marginBottom: "15px" }}> COMPANY PROFILE: </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", width: "60%", marginBottom: "15px" }}>
                                                <span style={{ marginRight: "30px" }}> Corporate Name:{user.companyName} </span>
                                                <span> Corporate Register #: </span>
                                                <span> Corporate Tax No: </span>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", width: " 37%", marginBottom: "15px" }}>
                                                <span> Corporate Email #:{user.email} </span>
                                                <span> Corporate Contact No: {user.officeContactNo}</span>
                                            </div>
                                            <div style={{ margin: "60px 0 30px" }}>LICENSE INVOICE HISTORY</div>
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
                                            <th>AMOUNT&nbsp;(3 MONTH)</th>
                                            <th style={{ width: "180px" }}>PAYMENT&nbsp;STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            <tr>
                                                <td>1</td>
                                                <td>{selectedPDFInvoice.employeeDetails[0].firstName}&nbsp;{selectedPDFInvoice.employeeDetails[0].lastName}</td>
                                                <td>
                                                    {new Date(selectedPDFInvoice.orderDetails.orderDate).toLocaleDateString()}
                                                </td>
                                                <td>ORDER NO</td>
                                                <td>INVOICE NO</td>
                                                <td>
                                                    {
                                                        selectedPDFInvoice.orderDetails.products.map(prd => (
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
                                                    <a href="" className="paid_btn"> PAID</a>
                                                </td>
                                            </tr>
                                        }
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
