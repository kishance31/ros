import React, { useState } from 'react';
import EmployeeOrderPaymentBox from '../../components/corporate-panel/employeeOrderDetails/employeeOrderPaymentBox';
import EmployeeOrderTable from '../../components/corporate-panel/employeeOrderDetails/employeeOrderTable';
import { EmployeeOrderDetailsList } from '../../utils/constants';

const EmployeeOrderDetails = () => {

  const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);

  const [visibleTable, setVisibleTable] = useState(EmployeeOrderDetailsList);

  const onTable = (event) => {
    const tableId = event.target.getAttribute('toggle-table-data')
    setVisibleTable(
      visibleTable.map(id => {
        if (id.srNo == tableId) {
          id.active = !id.active;
        }
        return id;
      })
    );
  }

  return (
    <>
      <div className="top_bar mb-4 mb-lg-0">
        <form className="flex-grow-1">
          <div className="row">
            <div className="col-lg-3">
              <div className="input-group">
                <label>Select Employee</label>
                <select title="SELECT" className="selectpicker form-control">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="input-group">
                <label>License Type</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  value="SILVER"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="input-group">
                <label>License No.</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  value="123456"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </form>

        <div className="btn_wrp">
          <button className="btn_pink">Add</button>

          <button className="btn_blue" data-toggle="modal" data-target="#payment_details_list"
            onClick={() => {
              setVisibleConfirmModal(true);
            }}>Confirm</button>
          <EmployeeOrderPaymentBox
            isOpen={visibleConfirmModal}
            toggleModal={() => {
              setVisibleConfirmModal(!visibleConfirmModal);
            }}
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
                  <th>ITEM&nbsp;CATEGORY</th>
                  <th>ITEM&nbsp;NAME</th>
                  <th>ITEM&nbsp;COST&nbsp;(USD)</th>
                  <th>ORDER&nbsp;NO</th>
                  <th>ORDER&nbsp;DATE</th>
                  <th>ORDER&nbsp;STATUS</th>
                  <th>DISPATCH&nbsp;DATE</th>
                  <th>DELIVERY&nbsp;STATUS</th>
                  <th className="text-center">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {
                  EmployeeOrderDetailsList.map((orderList, index) => (
                    <>
                      <tr key={index}>
                        <td>
                          <div className="custom_checkbox">
                            <input type="checkbox" id={orderList.srNo} />
                            <label htmlFor={orderList.srNo}></label>
                          </div>
                        </td>
                        <td>
                          <div toggle-table-data={orderList.srNo} className="toggle_icon" onClick={onTable}></div>
                        </td>
                        <td>{index + 1}</td>
                        <td>{orderList.itemCategory}</td>
                        <td>{orderList.itemName}</td>
                        <td>${orderList.itemCost}</td>
                        <td>{orderList.orderNo}</td>
                        <td>{orderList.orderDate}</td>
                        <td className="pink">{orderList.orderStatus}</td>
                        <td>{orderList.dispatchDate}</td>
                        <td>{orderList.deliveryStatus}</td>
                        <td className="text-center">
                          <div className="action_btn_wrap">
                            <button className="btn_action btn_border">Edit</button>
                            <button className="btn_action pink">Delete</button>
                          </div>
                        </td>
                      </tr>
                      {
                        orderList.active ? <EmployeeOrderTable tableDetails={orderList.tableDetails} /> : null
                      }
                    </>
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

export default EmployeeOrderDetails;