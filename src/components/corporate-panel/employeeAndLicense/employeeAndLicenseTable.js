import React from 'react';

const EmployeeAndLicenseTable = (props) => {
    const { getEmployeeList, onUpdate, onDelete } = props;
    return (
        <table className="text-center">
            <thead>
                <tr>
                    <th>Sr&nbsp;No</th>
                    <th>EMPLOYEE&nbsp;NAME</th>
                    <th>EMAIL&nbsp;ID</th>
                    <th>License&nbsp;TYPE</th>
                    <th>BRANCH</th>
                    <th className="action_col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    getEmployeeList.length ? (
                        getEmployeeList.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.firstName}&nbsp;{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.licenseType}</td>
                                <td>{item.branchName}</td>
                                <td className="action_col">
                                    <button className="btn_action btn_border"
                                        onClick={() => { onUpdate(item) }}>Edit</button>
                                    <button className="btn_action pink" onClick={() => { onDelete(item._id) }}>Delete</button>
                                    <button className="btn_action orange">Invitation Send</button>
                                    <button className="btn_action light_blue">Resend Invitation</button>
                                </td>
                            </tr>
                        )
                    ) : (
                            <tr className="text-center">
                                <td colSpan={6}>
                                    No employee added. Add a employee
                                                    </td>
                            </tr>
                        )
                }
            </tbody>
        </table>
    )
}

export default EmployeeAndLicenseTable;