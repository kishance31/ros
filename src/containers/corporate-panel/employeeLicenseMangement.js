import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import EmployeeAndLicenseAddBox from '../../components/corporate-panel/employeeAndLicense/employeeAndLicenseAddBox';
import employeeAndLicenseAction, {
    employeeAndLicenseCountAsync,
    getEmployeesAsync,
    deleteDataAsync,
    getBranchNamesAsync
} from '../../actions/employeeAndLicense.action';
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';

const EmployeeLicenseManagement = () => {

    const dispatch = useDispatch();

    const initFormState = {
        companyName: "", firstName: "", lastName: "", position: "", department: "", employeeId: "",
        email: "", username: "", mobileNo: "", password: "", reEnterPassword: "",
        //delivery_address:"",city:"",state:"",country:""
    }
    const [employeeDetails, setEmployeeDetails] = useState(initFormState)

    const [visibleAddDataModal, setVisibleAddDataModal] = useState(false);

    const user = useSelector(state => state.auth.user)
    const {
        availabelLicenseCount,
        refreshEmployee,
        getEmployeeList,
        totalEmployeesCount,
        branchNames,
        refreshBranchNames,
        batchNumber
    } = useSelector(state => state.employeeAndLicense)
    const availableLicenseList = useSelector(state => state.purchaseLicense.availableLicenseList)

    const onPageChange = (currentBatch) => {
        dispatch(employeeAndLicenseAction.setBatchNumber(currentBatch || batchNumber));
        dispatch(employeeAndLicenseAction.refreshEmployeeList());
    }

    const { limit, handleBatchChange } = 
        usePaginationHook(5, batchNumber, onPageChange);

    useEffect(() => {
        if (isEmpty(availabelLicenseCount)) {
            dispatch(employeeAndLicenseCountAsync(user._id, user.tokens))
        }
    }, [])

    useEffect(() => {
        if (refreshEmployee) {
            dispatch(getEmployeesAsync(user.tokens, user._id, limit, batchNumber))
        }
    }, [refreshEmployee])

    useEffect(() => {
        if (refreshBranchNames) {
            dispatch(getBranchNamesAsync(user._id, user.tokens));
        }
    }, [refreshBranchNames])

    const onUpdate = (employee) => {
        setEmployeeDetails(employee)
        setVisibleAddDataModal(true);
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
                                Object.keys(availabelLicenseCount).map((key) =>
                                    <li key={key} className="bg_pink">
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
                            toggleModal={() => {
                                setEmployeeDetails(initFormState)
                                setVisibleAddDataModal(!visibleAddDataModal);
                            }}
                            employeeDetails={employeeDetails}
                            availableLicenseList={availableLicenseList}
                            corporateId={user._id}
                            branchNames={branchNames}
                        />
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="shadow_box">
                        <div className="general_table table-responsive">
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
                            {
                                getEmployeeList.length ? (
                                    <div style={{ marginTop: 20, float: "right" }}>
                                        <BasicPagination
                                            totalRecords={totalEmployeesCount}
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
            </div>
        </>
    )
}
export default EmployeeLicenseManagement;