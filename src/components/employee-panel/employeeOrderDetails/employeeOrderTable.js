import React from 'react';

const EmployeeOrderTable = ({ tableDetails }) => {
  return (
    <>
      <tr id='toggle_table_data' className='table_detail'>
        <td colSpan='12'>
          <table>
            <thead>
              <tr>
                <th className='w_20'>SR&nbsp;NO</th>
                <th className='w_20'>ITEM&nbsp;NAME</th>
                <th className='w_20'>ITEM&nbsp;CODE</th>
                <th className='w_20'>ITEM&nbsp;COST</th>
                <th>FIRST&nbsp;3&nbsp;MONTH&nbsp;COST</th>
                <th>MONTHly&nbsp;COST</th>
                <th className='text-center'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {tableDetails.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemCode}</td>
                    <td>$ {item.itemCost}</td>
                    <td>$ {Math.round((item.itemCost / 12) * 3)}</td>
                    <td>$ {Math.round(item.itemCost / 12)}</td>
                    <td className='text-center'>
                      <div className='action_btn_wrap'>
                        <button
                          className='btn_action btn_border'
                          data-toggle='modal'
                          data-target='#ReplaceModal'
                        >
                          REPLACE
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
};

export default EmployeeOrderTable;
