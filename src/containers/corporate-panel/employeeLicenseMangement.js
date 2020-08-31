import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmployeeAndLicenseAddBox from '../../components/corporate-panel/employeeAndLicense/employeeAndLicenseAddBox';
import {
    employeeAndLicenseCountAsync,
    getEmployeesAsync,
    //updateDataAsync,
    deleteDataAsync
} from '../../actions/employeeAndLicense.action';

const EmployeeLicenseManagement = () => {

    const dispatch = useDispatch();

    const [employeeDetails, setEmployeeDetails] = useState({
        companyName: "", firstName: "", lastName: "", position: "", department: "", employeeId: "",
        email: "", userName: "", mobileNo: "", password: "", reEnterPassword: "",
        //delivery_address:"",city:"",state:"",country:""
    })

    const [visibleAddDataModal, setVisibleAddDataModal] = useState(false);

    const user = useSelector(state => state.auth.user)

    const availabelLicenseCount = useSelector(state => state.employeeAndLicense.availabelLicenseCount)
    const refreshEmployee = useSelector(state => state.employeeAndLicense.refreshEmployee)

    useEffect(() => {
        dispatch(employeeAndLicenseCountAsync(user._id, user.tokens))
    }, [])

    const getEmployeeList = useSelector(state => state.employeeAndLicense.getEmployeeList)

    useEffect(() => {
        if (refreshEmployee) {
            dispatch(getEmployeesAsync(user.tokens))
        }
    }, [refreshEmployee])

    const onUpdate = (employee) => {
        console.log(employee);
        setEmployeeDetails(employee)
    }
    const onDelete = (id) => {
        dispatch(deleteDataAsync(id, user.tokens))
    }

    return (
        <>
            <div className="side_space">
                <div className="page_title">Available License</div>
                <div className="top_bar">
                    <div className="license_detail">
                        <ul>
                            {
                                Object.keys(availabelLicenseCount).map((key, i) =>
                                    <li key={i} className="bg_pink">
                                        <span>{key}</span>
                                        <span>{availabelLicenseCount[key]}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="btn_wrp">
                        <button className="btn_blue">Import File</button>
                        <button className="btn_blue" data-target="#add_employeement" data-toggle="modal"
                            onClick={() => { setVisibleAddDataModal(true) }} >Add</button>
                        <EmployeeAndLicenseAddBox
                            isOpen={visibleAddDataModal}
                            toggleModal={() => setVisibleAddDataModal(!visibleAddDataModal)}
                            employeeDetails={employeeDetails}
                        />
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="shadow_box">
                        <div className="general_table table-responsive">
                            <table className="">
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
                                        getEmployeeList.map((item, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.firstName}&nbsp;{item.lastName}</td>
                                                <td>{item.email}</td>
                                                <td>Silver</td>
                                                <td>Ahmedabad</td>
                                                <td className="action_col">
                                                    <button className="btn_action btn_border"
                                                        toggleModal={() => setVisibleAddDataModal(!visibleAddDataModal)}
                                                        onClick={() => { setVisibleAddDataModal(true); onUpdate(item) }}>Edit</button>
                                                    <button className="btn_action pink" onClick={() => { onDelete(item._id) }}>Delete</button>
                                                    <button className="btn_action orange">Invitation Send</button>
                                                    <button className="btn_action light_blue">Resend Invitation</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmployeeLicenseManagement;