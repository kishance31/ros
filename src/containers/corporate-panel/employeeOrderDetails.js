import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import EmployeeOrderPaymentBox from '../../components/corporate-panel/employeeOrderDetails/employeeOrderPaymentBox';
import EmployeeOrderTable from '../../components/corporate-panel/employeeOrderDetails/employeeOrderTable';
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
   const [mainIndex, setMainIndex] = useState(0)
   const [selectedOrder, setselectedOrders] = useState([]);

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

   const onMainTable = (index) => {
      if (index === mainIndex) {
         setMainIndex(0)
      } else {
         setMainIndex(index)
      }
   }

   const onEmployeeSelect = (e) => {
      if (e.target.value) {
         dispatch(getEmployeeOrderDetailsAsync(e.target.value));
      } else {
         dispatch(getEmployeeOrderDetailsAsync());
      }
   }

   const onSelectChange = (e, orderDetails) => {
      if (e.target.checked) {
         setselectedOrders([
            ...selectedOrder,
            orderDetails,
         ]);
      } else {
         setselectedOrders([
            ...selectedOrder.filter(order => order._id !== e.target.getAttribute('data-id')),
         ])
      }
   }

   const showPaymentBox = () => {
      setVisibleConfirmModal(!visibleConfirmModal);
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
      if (selectedEmployee) {
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
                           <th>EMAIL</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           Object.keys(orderDetails).length ? (
                              Object.keys(orderDetails).map((key, index) => {
                                 return (
                                 <React.Fragment key={orderDetails[key][0]._id}>
                                    <tr>
                                       <td>
                                          <div
                                             className={`toggle_icon ${mainIndex && (mainIndex === (index + 1)) ? "expanded" : ""}`}
                                             onClick={() => onMainTable(index + 1)}>
                                          </div>
                                       </td>
                                       <td></td>
                                       <td>{index + 1}</td>
                                       <td>
                                          {
                                             orderDetails[key][0].employeeDetails.firstName ? orderDetails[key][0].employeeDetails.firstName + " " + orderDetails[key][0].employeeDetails.lastName : ""
                                          }
                                       </td>
                                       <td>
                                          {
                                             orderDetails[key][0].employeeDetails.email
                                          }
                                       </td>
                                    </tr>
                                    {
                                       mainIndex && (mainIndex === (index + 1)) ?
                                          <EmployeeOrderTable
                                             onSelectChange={onSelectChange}
                                             rowIndex={rowIndex}
                                             onTable={onTable}
                                             setVisibleDeleteModal={setVisibleDeleteModal}
                                             setSelectedEmployee={setSelectedEmployee}
                                             handleBatchChang e={handleBatchChange}
                                             orderDetails={orderDetails[key]}
                                          /> : null
                                    }
                                 </React.Fragment>
                                 )
                              })
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
               </div>
            </div>
         </div>
         <PaymentBox
            isOpen={showPaymentModal}
            toggleModal={() => setShowPaymentModal(!showPaymentModal)}
            orderList={selectedOrder}
            toggleOverlay={toggleOverlay}
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


