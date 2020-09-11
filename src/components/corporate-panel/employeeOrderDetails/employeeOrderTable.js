import React from 'react';

const EmployeeOrderTable = ({ tableDetails }) => {

    return (
        <>
            <tr id="toggle_table_data" className="table_detail">
                <td colSpan="12">
                    <table>
                        <thead>
                            <tr>
                                <th className="w_20">SR&nbsp;NO</th>
                                <th className="w_20">ITEM&nbsp;CODE</th>
                                <th className="w_20">TOTAL&nbsp;COST</th>
                                <th className="w_20">FIRST 3 MONTH&nbsp;COST</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableDetails.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.itemCode}</td>
                                            <td>${item.totalCost}</td>
                                            <td>${item.first3MonthCost}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    )
}

export default EmployeeOrderTable;
