import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import EmployeeAndLicenseAddBox from '../../components/corporate-panel/employeeAndLicense/employeeAndLicenseAddBox';
import EmployeeAndLicenseTable from '../../components/corporate-panel/employeeAndLicense/employeeAndLicenseTable';
import employeeAndLicenseAction, {
    employeeAndLicenseCountAsync,
    getEmployeesAsync,
    deleteDataAsync,
    getBranchNamesAsync,
    sendInvitationAsync
} from '../../actions/employeeAndLicense.action';
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';

const EmployeeLicenseManagement = () => {

    const dispatch = useDispatch();

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

    const initFormState = {
        companyName: user.companyName, firstName: "", lastName: "", position: "", department: "", employeeId: "",
        email: "", username: "", mobileNo: "", password: "", reEnterPassword: "",
        licenseId: availableLicenseList.length ? availableLicenseList[0]._id : "",
        branchId: branchNames.length ? branchNames[0]._id : "",
        address: [],
    }
    const [employeeDetails, setEmployeeDetails] = useState(initFormState)
    const [visibleAddDataModal, setVisibleAddDataModal] = useState(false);
    const [popupType, setPopupType] = useState('add');

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
        if (employee.branchId === null) {
            employee.branchId = ""
        }
        setEmployeeDetails(employee)
        setVisibleAddDataModal(true);
        setPopupType('edit');
    }
    const onDelete = (id) => {
        dispatch(deleteDataAsync(id, user.tokens))
    }

    const onSendInvitation = (id) => {
        dispatch(sendInvitationAsync(id, user.tokens))
    }

    return (
        <>
            <div className="">
                <div className="page_title">Available License</div>
                <div className="top_bar">
                    <div className="license_detail">
                        <ul>
                            {
                                availabelLicenseCount.map((lic) =>
                                    <li key={lic.licenseName} className="bg_pink">
                                        <span>{lic.licenseName}</span>
                                        <span>{lic.count}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="btn_wrp">
                        {/* <button className="btn_blue">
                            <img className="mr-2" src={require(`../../assets/images/excel.svg`)} alt="" />
                            Import File</button> */}
                        <button
                            className="btn_blue"
                            onClick={() => {
                                setVisibleAddDataModal(true);
                                setPopupType('add');
                            }}
                        >
                            Add
                        </button>
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
                            popupType={popupType}
                        />
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="shadow_box">
                        <div className="general_table table-responsive">
                            <EmployeeAndLicenseTable
                                getEmployeeList={getEmployeeList}
                                onUpdate={onUpdate}
                                onDelete={onDelete}
                                onSendInvitation={onSendInvitation}
                            />
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