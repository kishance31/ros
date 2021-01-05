import React, { useEffect } from 'react'
import ReactDOM, { createPortal } from 'react-dom';
import html2pdf from 'html2pdf.js';
import './invoicePDF.css';

const InvoicePDF = ({ selectedPDFInvoice, user }) => {

    useEffect(() => {
        if (selectedPDFInvoice) {
            const element = document.querySelector("#portal-root .main-body");
            html2pdf()
                .from(element)
                .save(`Order_Invoice_${Date.now()}.pdf`)
        }
    }, [selectedPDFInvoice])

    return ReactDOM, createPortal(
        <div style={{display: "none"}}>
            {
                user && selectedPDFInvoice ? (
                    <div className="main-body">
                        <main style={{ padding: "10px 15px 18px", border: "1px solid #000" }}>
                            <table cellSpacing="0" cellPadding="0" style={{ width: "100%", borderCollapse: "collapse", borderSpacing: 0 }}>
                                <thead>
                                    <tr>
                                        <td style={{ verticalAlign: "top", background: "#000" }}>ROS</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>
                                            <div className="main-body-style">
                                                New Purchase Invoice
                                </div>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                            <table cellSpacing="0" cellPadding="0" className="corporate-table">
                                <thead>
                                    <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
                                        <td colSpan="2" style={{ paddingBottom: "20px", width: "50%" }}>
                                            To,&nbsp;&nbsp;

                                    Corporate Name{user.companyName}&nbsp;&nbsp;
                                    Address
                            </td>
                                        <td style={{ width: "50%", textAlign: "right" }}>
                                            Invoice No.: 001&nbsp;&nbsp;
                                            Date:
                            </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7" style={{ width: "100 %" }}>
                                            <table cellSpacing="0" cellPadding="0" className="corporate-table-column">
                                                <thead>
                                                    <tr className="heading">
                                                        <th> Sr.&nbsp;No.</th>
                                                        <th> Employee Name </th>
                                                        <th>Item Description</th>
                                                        <th>Quantity Nos.</th>
                                                        <th>Rate/PS USD</th>
                                                        <th>First 3 Months Cost USD</th>
                                                        <th>Total USD</th>
                                                    </tr>


                                                    {
                                                        // selectedPDFInvoice.orderDetails.map((odr, idx) => (
                                                        <tr className="details">
                                                            <td style={{ textAlign: "center" }}>1</td>
                                                            <td style={{ textAlign: "left" }}>
                                                                <table>
                                                                    <tbody>
                                                                        <tr className="no-border">
                                                                            <td>{selectedPDFInvoice.employeeDetails[0].firstName}&nbsp;{selectedPDFInvoice.employeeDetails[0].lastName}</td>
                                                                        </tr>
                                                                        <tr className="no-border">
                                                                            <td>
                                                                                Order Date :&nbsp;
                                                                                    {new Date(selectedPDFInvoice.orderDetails.orderDate).toLocaleDateString()}
                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ textAlign: "left" }}>
                                                                <table>
                                                                    <tbody>
                                                                        {
                                                                            selectedPDFInvoice.orderDetails.products.map(prd => (
                                                                                <tr className="no-border">
                                                                                    <td>{prd.product_name}</td>
                                                                                </tr>
                                                                            ))

                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ textAlign: "left" }}>
                                                                <table>
                                                                    <tbody>
                                                                        {
                                                                            selectedPDFInvoice.orderDetails.products.map(prd => (
                                                                                <tr className="no-border">
                                                                                    <td>1</td>
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ textAlign: "left" }}>
                                                                <table>
                                                                    <tbody>
                                                                        {
                                                                            selectedPDFInvoice.orderDetails.products.map(prd => (
                                                                                <tr className="no-border">
                                                                                    <td>{prd.ros_cost}</td>
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ textAlign: "left" }}>
                                                                <table>
                                                                    <tbody>
                                                                        {
                                                                            selectedPDFInvoice.orderDetails.products.map(prd => (
                                                                                <tr className="no-border">
                                                                                    <td>{prd.firstTimeCost}</td>
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        // ))
                                                    }





                                                    {/* <tr className="details">
                                                        <td style={{ textAlign: "center" }}>1</td>
                                                        <td style={{ textAlign: "left" }}>Milan Pandya&nbsp;</td>
                                                        <td style={{ textAlign: "left" }}>Computer Table</td>
                                                        <td>
                                                            1&nbsp;
                                                </td>
                                                        <td>
                                                            450&nbsp;
                                                </td>
                                                        <td>

                                                            100&nbsp;
                                                </td>
                                                        <td>
                                                            100&nbsp;
                                                </td>
                                                    </tr>
                                                    <tr className="details">
                                                        <td>&nbsp;</td>
                                                        <td style={{ textAlign: "left" }}>
                                                            Order Date :&nbsp;
                                                            10-01-2020
                                                </td>
                                                        <td style={{ textAlign: "left" }}>
                                                            HP Laptop </td>
                                                        <td>
                                                            1&nbsp;
                                                </td>
                                                        <td>
                                                            450&nbsp;
                                                </td>
                                                        <td>
                                                            100&nbsp;
                                                </td>
                                                        <td>
                                                            100&nbsp;
                                                </td>
                                                    </tr>
                                                    <tr className="details">
                                                        <td>&nbsp;</td>
                                                        <td>&nbsp;</td>
                                                        <td style={{ textAlign: "left" }}> Chair </td>
                                                        <td>
                                                            1&nbsp;
                                                </td>
                                                        <td>
                                                            450&nbsp;
                                                </td>
                                                        <td>
                                                            100&nbsp;
                                                </td>
                                                        <td>
                                                            100&nbsp;
                                                </td>
                                                    </tr> */}
                                                    <tr style={{ backgroundColor: " #000", color: "#fff", fontWeight: "bold" }} className="details">
                                                        <td colSpan="3" style={{ textAlign: "center" }}>Total</td>
                                                        <td>&nbsp;</td>
                                                        <td> 450 </td>
                                                        <td> 100 </td>
                                                        <td> 100 </td>

                                                    </tr>
                                                </thead>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7">
                                            <p style={{ margin: "15p: 0 25px", fontSize: "16px" }}>
                                                <b>Notes :</b>&nbsp;
                                        <span style={{ marginLeft: "20px", display: "block", marginTop: "15px" }}>
                                                    - Payment terms are 3 Months advance and 9 EMI after 3 months&nbsp;
                                                    - Payment not refundable&nbsp;
                                                    - Item Delivery subject to product availability&nbsp;
                                                    - Recurring invoice will be send 2st date of every month after 3 months&nbsp;
                                                    - For any product complain please contact vendor directly.
                                        </span>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7">
                                            <span style={{ textAlign: "right", fontSize: "15px", fontWeight: "bold", display: "block", marginTop: "30px" }}>
                                                Vat No. : 5452WASDJDH1254 Date : 25-04-2018
                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7">
                                            <span style={{ borderTop: "1px solid #000", textAlign: "center", fontSize: "15px", fontWeight: "bold", display: "block", paddingTop: "20px", marginTop: "10px" }}>
                                                ROS&nbsp;
                                                Address : 906, Signature 1, S.G. Road, Ahmedabad. Gujarat. INDIA&nbsp;
                                    Contact : +01-9909008180 | Email : contact@ros.com </span>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </main >
                    </div >
                ) : null
            }
        </div>,
        document.getElementById('portal-root')
    )
}

export default InvoicePDF;
