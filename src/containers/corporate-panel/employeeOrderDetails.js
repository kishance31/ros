import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Input, Label, FormGroup } from 'reactstrap';
import EmployeeOrderPaymentBox from '../../components/corporate-panel/employeeOrderDetails/employeeOrderPaymentBox';
import EmployeeOrderTable from '../../components/corporate-panel/employeeOrderDetails/employeeOrderTable';
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';
import { OverlayContext } from '../../context/loadingOverlay.context';
import {
	getEmployeeOrderDetailsAsync, EmployeeOrderDetailsActions, getEmployeeNamesAsync, confirmOrderPayment
} from '../../actions/employeeOrderDetails.action';
import { cancelOrderAsync } from '../../actions/employeeOrderHistory.action';
import PaymentBox from '../../components/corporate-panel/employeeOrderDetails/paymentBox';
import EmployeeOrderDeleteBox from '../../components/corporate-panel/employeeOrderDetails/orderDeleteBox';

const EmployeeOrderDetails = () => {

	const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState(null);

	const dispatch = useDispatch();

	const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);
	const [showPaymentModal, setShowPaymentModal] = useState(false);

	const [rowIndex, setRowIndex] = useState(0)
	const [selectedOrder, setselectedOrders] = useState([]);
	const [firstTimeTotal, setFirstTimeTotal] = useState(0);

	const { toggleOverlay } = useContext(OverlayContext);

	const { orderDetails, totalRecords, refreshList, batchNumber, employeeNames } =
		useSelector(state => state.employeeOrderDetails, shallowEqual);

	const onPageChange = (currentBatch) => {
		dispatch(EmployeeOrderDetailsActions.setBatchNumber(currentBatch || batchNumber));
		dispatch(EmployeeOrderDetailsActions.refreshEmployeeList());
	}

	const { limit, handleBatchChange } =
		usePaginationHook(5, batchNumber, onPageChange);

	useEffect(() => {
		if (refreshList) {
			dispatch(getEmployeeOrderDetailsAsync());
		}
	}, [refreshList])

	useEffect(() => {
		if (!employeeNames.length) {
			dispatch(getEmployeeNamesAsync());
		}
	}, [employeeNames])

	const onTable = (index) => {
		if (index === rowIndex) {
			setRowIndex(0)
		} else {
			setRowIndex(index)
		}
	}

	const onEmployeeSelect = (e) => {
		if (e.target.value) {
			dispatch(getEmployeeOrderDetailsAsync(e.target.value));
		} else {
			dispatch(getEmployeeOrderDetailsAsync());
		}
	}

	const onSelectChange = (e) => {
		if (e.target.checked) {
			setselectedOrders([
				...selectedOrder,
				orderDetails.find(order => order._id === e.target.getAttribute('data-id')),
			]);
		} else {
			setselectedOrders([
				...selectedOrder.filter(order => order._id !== e.target.getAttribute('data-id')),
			])
		}
	}

	const showPaymentBox = (total) => {
		setVisibleConfirmModal(!visibleConfirmModal);
		setFirstTimeTotal(total);
		setShowPaymentModal(!showPaymentModal);
	}

	const onConfirmPayment = (paypalDetails) => {
		const orderIds = selectedOrder.map(order => order.orderId);
		dispatch(confirmOrderPayment(orderIds, paypalDetails));
		setShowPaymentModal(!showPaymentModal);
		setselectedOrders([]);
	}

	const onDeleteOrder = (id) => {
		dispatch(cancelOrderAsync(id, getEmployeeOrderDetailsAsync));
	}

	const onEmployeeOrderDelete = () => {
        if(selectedEmployee) {
            onDeleteOrder(selectedEmployee._id)
        }
        setSelectedEmployee(null);
        setVisibleDeleteModal(false);
    }

	return (
		<>
			<div className="top_bar mb-4 mb-lg-0">
				<form className="flex-grow-1">
					<div className="row">
						<div className="col-lg-3">
							<div className="input-group">
								<label>Select Employee</label>
								<select title="SELECT" className="selectpicker form-control"
									onChange={onEmployeeSelect}
								>
									<option value="">All</option>
									{
										employeeNames.map(emp => (
											<option key={emp._id} value={emp._id}>{emp.firstName + " " + emp.lastName}</option>
										))
									}
								</select>
							</div>
						</div>
					</div>
				</form>

				<div className="btn_wrp">
					<button className="btn_blue"
						disabled={selectedOrder.length ? false : true}
						onClick={() => {
							// const orderIds = selectedOrder.map(order => order.orderId);
							// dispatch(confirmOrderPayment(orderIds, {abc: 123}));
							setVisibleConfirmModal(true);
						}}>Confirm</button>
					<EmployeeOrderPaymentBox
						isOpen={visibleConfirmModal}
						toggleModal={() => {
							setVisibleConfirmModal(!visibleConfirmModal);
						}}
						selectedOrder={selectedOrder}
						showPaymentBox={showPaymentBox}
					/>
				</div>

			</div>

			<div className="container-fluid">
				<div className="shadow_box">
					<div className="general_table table-responsive">
						<table className="">
							<thead>
								<tr>
									<th></th>
									<th></th>
									<th>Sr&nbsp;No</th>
									<th>EMPLOYEE&nbsp;NAME</th>
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
																<FormGroup check onChange={onSelectChange}>
																	<Label check>
																		<Input type="checkbox" data-id={orderList._id} />
																	</Label>
																</FormGroup>
															) : null
														}
														{/* <input type="checkbox" />
								<label htmlFor={orderList.srNo}></label> */}
													</td>
													<td>
														<div toggle-table-data={orderList.srNo} className="toggle_icon" onClick={() => onTable(index + 1)}></div>
													</td>
													<td>{index + 1}</td>
													<td>
														{
															orderList.employeeDetails.length ? orderList.employeeDetails[0].firstName + " " + orderList.employeeDetails[0].lastName : ""
														}
													</td>
													<td>${orderList.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)}</td>
													<td>
														${
															parseFloat((
																((orderList.productDetails.reduce((acc, prod) => acc + prod.ros_cost, 0)) / 12)
																* orderList.firstPaymentTerm))
																.toFixed(2)
														}
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
																			// onDeleteOrder(orderList._id)
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
													rowIndex && (rowIndex === (index + 1))
														? <EmployeeOrderTable tableDetails={orderList.productDetails} firstPaymentTerm={orderList.firstPaymentTerm} /> : null
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
					</div>
				</div>
			</div>
			<PaymentBox
				isOpen={showPaymentModal}
				toggleModal={() => setShowPaymentModal(!showPaymentModal)}
				orderList={selectedOrder}
				toggleOverlay={toggleOverlay}
				firstTimeTotal={firstTimeTotal}
				onConfirmPayment={onConfirmPayment}
			/>
			<EmployeeOrderDeleteBox
				isOpen={visibleDeleteModal}
				toggleModal={() => {
					setVisibleDeleteModal(!visibleDeleteModal);
					setSelectedEmployee(null);
				}}
				onEmployeeOrderDelete={onEmployeeOrderDelete}
			/>
		</>
	);
};

export default EmployeeOrderDetails;