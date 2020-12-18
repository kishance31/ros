import React from 'react';
import { Input, Label, FormGroup } from 'reactstrap';
import EmployeeOrderSubTable from './employeeOrderSubTable';
import BasicPagination from '../../../components/pagination/basicPagination';
import { useSelector, shallowEqual } from 'react-redux';

const EmployeeOrderTable = (props) => {

    const {
        onSelectChange,
        onTable,
        rowIndex,
        setVisibleDeleteModal,
        setSelectedEmployee,
        limit,
        handleBatchChange,
        orderDetails
    } = props;

    const { totalRecords, batchNumber } = useSelector(state => state.employeeOrderDetails, shallowEqual);

    return (
        <tr id="toggle_table_data" className="table_detail">
            <td colSpan="12">
                <table className="">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            {/* <th>Sr&nbsp;No</th> */}
                            <th>TOTAL&nbsp;ORDER&nbsp;COST</th>
                            <th>FIRST&nbsp;TIME&nbsp;COST&nbsp;(USD)</th>
                            <th>ORDER&nbsp;NO</th>
                            <th>ORDER&nbsp;DATE</th>
                            <th>ORDER&nbsp;STATUS</th>
                            <th>DISPATCH&nbsp;DATE</th>
                            <th>DELIVERY&nbsp;DATE</th>
                            <th className="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderDetails.length ? (
                                orderDetails.map((orderList, index) => (
                                    <React.Fragment key={orderList._id}>
                                        <tr>
                                            <td>
                                                {
                                                    !orderList.isFirstTimePayment ? (
                                                        <FormGroup check onChange={(e) => onSelectChange(e, orderList)}>
                                                            <Label check>
                                                                <Input type="checkbox" data-id={orderList._id} />
                                                            </Label>
                                                        </FormGroup>
                                                    ) : null
                                                }
                                            </td>
                                            <td>
                                                <div
                                                    toggle-table-data={orderList.srNo}
                                                    className={`toggle_icon ${rowIndex && (rowIndex === (index + 1)) ? "expanded" : ""}`}
                                                    onClick={() => onTable(index + 1)}>
                                                </div>
                                            </td>
                                            {/* <td>{index + 1}</td> */}
                                            <td>${orderList.totalOrderCost.toFixed(2)}</td>
                                            <td>
                                                ${orderList.firstTimeCost.toFixed(2)}
                                            </td>
                                            <td>{orderList.orderId}</td>
                                            <td>{orderList.orderDate ? new Date(orderList.orderDate).toLocaleDateString() : ""}</td>
                                            <td className="pink">{orderList.status}</td>
                                            <td>{orderList.dispatchDate ? new Date(orderList.dispatchDate).toLocaleDateString() : "Pending"}</td>
                                            <td>{orderList.deliveryDate ? new Date(orderList.deliveryDate).toLocaleDateString() : "Pending"}</td>
                                            <td className="text-center">
                                                {
                                                    !orderList.isFirstTimePayment ? (
                                                        <div className="action_btn_wrap">
                                                            <button className="btn_action pink"
                                                                onClick={() => {
                                                                    setVisibleDeleteModal(true);
                                                                    setSelectedEmployee(orderList);
                                                                }}
                                                            >Delete</button>
                                                        </div>
                                                    ) : null
                                                }
                                            </td>
                                        </tr>
                                        {
                                            rowIndex && (rowIndex === (index + 1)) ?
                                                <EmployeeOrderSubTable
                                                    tableDetails={orderList.products}
                                                    firstPaymentTerm={orderList.firstPaymentTerm}
                                                /> : null
                                        }
                                    </React.Fragment>
                                ))
                            ) : (
                                    <tr className="text-center">
                                        <td colSpan={12}>
                                            No order placed.
                                    </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
                {
                    orderDetails.length ? (
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
            </td>
        </tr>
    )
}

export default EmployeeOrderTable
