import React, { Fragment, useState } from 'react';

import { EmployeeOrderHistoryList } from '../../utils/constants';
import EmployeeOrderTable from '../../components/employee-panel/employeeOrderDetails/employeeOrderTable';

const OrderHistory = () => {
  const [visibleTable, setVisibleTable] = useState(EmployeeOrderHistoryList);

  const onTable = (event) => {
    const tableId = event.target.getAttribute('toggle-table-data');
    setVisibleTable(
      visibleTable.map((id) => {
        if (id.srNo == tableId) {
          id.active = !id.active;
        }
        return id;
      })
    );
  };

  return (
    <div className='container-fluid'>
      <div className='shadow_box'>
        <div className='general_table table-responsive'>
          <table className=''>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Sr&nbsp;No</th>
                <th>ORDER&nbsp;NO</th>
                <th>ORDER&nbsp;DATE</th>
                <th>TOTAL&nbsp;ORDER&nbsp;(COST)</th>
                <th>FIRST&nbsp;3&nbsp;MONTH&nbsp;COST</th>
                <th>MONTHly&nbsp;COST</th>
                <th>ORDER&nbsp;STATUS</th>
                <th>CANCEL&nbsp;ORDER</th>
              </tr>
            </thead>
            <tbody>
              {EmployeeOrderHistoryList.map((orderList, index) => {
                const totalOrderCost = orderList.tableDetails.reduce(
                  (accum, tableData) => accum + tableData.itemCost,
                  0
                );
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td>
                        <div className='custom_checkbox'>
                          <input type='checkbox' id={orderList.srNo} />
                          <label htmlFor={orderList.srNo}></label>
                        </div>
                      </td>
                      <td>
                        <div
                          className='toggle_icon'
                          toggle-table-data={orderList.srNo}
                          onClick={onTable}
                        ></div>
                      </td>
                      <td>{index + 1}</td>
                      <td>{orderList.orderNo}</td>
                      <td>{orderList.orderDate}</td>
                      <td>$ {Math.round(totalOrderCost)}</td>
                      <td>$ {Math.round((totalOrderCost / 12) * 3)}</td>
                      <td>$ {Math.round(totalOrderCost / 12)}</td>
                      <td className='pink'>{orderList.orderStatus}</td>
                      <td className='pink'>{orderList.cancelOrder}</td>
                    </tr>
                    {orderList.active ? (
                      <EmployeeOrderTable
                        tableDetails={orderList.tableDetails}
                      />
                    ) : null}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
