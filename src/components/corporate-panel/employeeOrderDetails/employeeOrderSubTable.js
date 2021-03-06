import React from 'react';

const EmployeeOrderSubTable = ({ tableDetails }) => {

    return (
        <>
            <tr id="toggle_table_data" className="table_detail">
                <td colSpan="12">
                    <table>
                        <thead>
                            <tr>
                                <th className="w_20">ITEM&nbsp;NAME</th>
                                <th className="w_20">TOTAL&nbsp;COST</th>
                                <th className="w_20">FIRST TIME COST&nbsp;COST</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableDetails.map((item, index) => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.product_name}</td>
                                            <td>${item.ros_cost.toFixed(2)}</td>
                                            <td>${item.firstTimeCost.toFixed(2)}</td>
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

export default EmployeeOrderSubTable;
