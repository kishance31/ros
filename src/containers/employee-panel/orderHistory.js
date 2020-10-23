import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeOrderTable from '../../components/employee-panel/employeeOrderDetails/employeeOrderTable';
import { getEmployeeOrderHistoryAsync, cancelOrderAsync, EmployeeOrderHistoryActions } from '../../actions/employeeOrderHistory.action';
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';

const OrderHistory = () => {
  const [rowIndex, setRowIndex] = useState(0)

  const dispatch = useDispatch();

  const { refreshHistory, orderHistory, totalRecords, batchNumber } = useSelector(state => state.employeeOrderHistory);

  useEffect(() => {
    if (refreshHistory) {
      dispatch(getEmployeeOrderHistoryAsync(batchNumber - 1, limit));
    }
  }, [refreshHistory])

  const onTable = (index) => {
    if(index === rowIndex) {
      setRowIndex(0)  
    } else {
      setRowIndex(index)
    }
  };

  const onCancelOrder = (id) => {
    dispatch(cancelOrderAsync(id));
  }

  const onPageChange = (currentBatch) => {
    dispatch(EmployeeOrderHistoryActions.chanegOrderPage(currentBatch));
  }

  const { limit, handleBatchChange } =
    usePaginationHook(5, batchNumber, onPageChange);

  return (
    <div className='container-fluid'>
      <div className='shadow_box'>
        <div className='general_table table-responsive'>
          <table className=''>
            <thead>
              <tr>
                {/* <th></th> */}
                <th></th>
                <th>Sr&nbsp;No</th>
                <th>ORDER&nbsp;NO</th>
                <th>ORDER&nbsp;DATE</th>
                <th>ORDER&nbsp;STATUS</th>
                <th>CANCEL&nbsp;ORDER</th>
              </tr>
            </thead>
            <tbody>
              {
                orderHistory.length ? (
                  orderHistory.map((orderList, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        {/* <td>
                        <div className='custom_checkbox'>
                          <input type='checkbox' id={index + 1} />
                          <label htmlFor={index + 1}></label>
                        </div>
                      </td> */}
                        <td>
                          <div
                            className='toggle_icon'
                            onClick={() => onTable(index + 1)}
                          ></div>
                        </td>
                        <td>{index + 1}</td>
                        <td>{orderList.orderId}</td>
                        <td>{new Date(orderList.orderDate).toLocaleString()}</td>
                        <td className='pink'>{orderList.status}</td>
                        <td className='pink' onClick={() => onCancelOrder(orderList._id)}>CANCEL</td>
                      </tr>
                      {rowIndex && (rowIndex === (index + 1)) ? (
                        <EmployeeOrderTable
                          tableDetails={orderList.productDetails}
                        />
                      ) : null}
                    </React.Fragment>
                  ))
                ) : (
                    <tr className="text-center">
                      <td colSpan={6}>
                        No order placed.
                  </td>
                    </tr>
                  )
              }
            </tbody>
          </table>
          {
            orderHistory.length ? (
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
  );
};

export default OrderHistory;
