import React, { useState } from 'react';
import EmployeeAndLicenseDeleteBox from '../../corporate-panel/employeeAndLicense/employeeAndLicenseDeleteBox'

const EmployeeAndLicenseTable = (props) => {

    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const { getEmployeeList, onUpdate, onSendInvitation, onDelete } = props;

    const onEmployeeDelete = () => {
        if(selectedEmployee) {
            onDelete(selectedEmployee._id)
        }
        setSelectedEmployee(null);
        setVisibleDeleteModal(false);
    }

    return (
        <>
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
                                    <td>{item.license ? item.license.type : ""}</td>
                                    <td>{item.branch.length ? item.branch[0].branch_name : ""}</td>
                                    <td className="action_col">
                                        <button className="btn_action btn_border"
                                            onClick={() => { onUpdate(item) }}>Edit</button>
                                        <button className="btn_action pink"
                                            onClick={() => {
                                                // onDelete(item._id);
                                                setVisibleDeleteModal(true);
                                                setSelectedEmployee(item);
                                            }}>Delete</button>
                                            {
                                                item.isFirstLogin ? 
                                                    <button className="btn_action orange" onClick={() => { onSendInvitation(item._id) }}>Send Invitation</button> :
                                                    null

                                            }
                                        {/* <button className="btn_action light_blue" onClick={() => { onSendInvitation(item._id) }}>Resend Invitation</button> */}
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
            < EmployeeAndLicenseDeleteBox
                isOpen={visibleDeleteModal}
                toggleModal={() => {
                    setVisibleDeleteModal(!visibleDeleteModal);
                    setSelectedEmployee(null);
                }}
                onEmployeeDelete={onEmployeeDelete}
            />
        </>
    )
}

export default EmployeeAndLicenseTable;