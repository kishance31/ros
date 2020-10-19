import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import BasicPagination from '../../components/pagination/basicPagination';
import { usePaginationHook } from '../../hooks/paginationHook';
import {
  getEmployeesAsync, ManageAllocateLicenseAction
} from '../../actions/manageAllocateLicense.action';

const ManageAllocateLicense = () => {

  const dispatch = useDispatch();

  const {
    refreshEmployee,
    getEmployeeList,
    totalEmployeesCount,
    batchNumber
  } = useSelector(state => state.ManageAllocateLicense)

  const onPageChange = (currentBatch) => {
    dispatch(ManageAllocateLicenseAction.setBatchNumber(currentBatch || batchNumber));
    dispatch(ManageAllocateLicenseAction.refreshEmployeeList());
  }

  const { limit, handleBatchChange } =
    usePaginationHook(5, batchNumber, onPageChange);

  useEffect(() => {
    if (refreshEmployee) {
      dispatch(getEmployeesAsync(limit))
    }
  }, [refreshEmployee])

  const renderPart = () => {
    return (
      <h1>ManageAllocateLicense</h1>
    )
  }


  return (
    <>
      <div className="page_title">Allocate License</div>
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
                  <th>ASSIGN&nbsp;DATE</th>
                  <th className="text-center">ACTION</th>
                  <th>DEACTIVATION&nbsp;DATE</th>
                  <th>REASON</th>
                </tr>
              </thead>
              <tbody>
                {
                  getEmployeeList.length ? (
                    getEmployeeList.map((allocateLicense, index) =>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{allocateLicense.firstName + " " + allocateLicense.lastName}</td>
                        <td>{allocateLicense.email}</td>
                        <td>{allocateLicense.license.length ? allocateLicense.license[0].type : ""}</td>
                        <td>{new Date(allocateLicense.licenseAssignDate).toLocaleDateString()}</td>
                        <td>
                          <div className="action_btn_wrap position-relative">
                            {
                              allocateLicense.status === "APPROVED" ? (
                                <button className="btn_action pink deactive" onClick={renderPart}>
                                  Deactive
                                </button>
                              ) : (
                                  <button className="btn_action btn_border">
                                    Active
                                  </button>
                                )
                            }
                          </div>
                        </td>
                        <td>
                          {
                            allocateLicense.deactivationDate ?
                              new Date(allocateLicense.deactivationDate).toLocaleDateString() :
                              "None"
                          }
                        </td>
                        <td>{allocateLicense.deactivationDate || "None"}</td>
                      </tr>
                    )
                  ) : (
                      <tr className="text-center">
                        <td colSpan={7}>
                          No license allocated to any employee
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
    </>
  );
};

export default ManageAllocateLicense;
