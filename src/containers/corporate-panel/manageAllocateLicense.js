import React from "react";
import { AllocateLicenseList } from "../../utils/constants";

const ManageAllocateLicense = () => {

    const renderPart = () => {
        return(
            alert('aaaaaa')
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
                  <th>License&nbsp;NO</th>
                  <th>ASSIGN&nbsp;DATE</th>
                  <th className="text-center">ACTION</th>
                  <th>DEACTIVATION&nbsp;DATE</th>
                  <th>REASON</th>
                </tr>
              </thead>
              <tbody>
                {AllocateLicenseList.map((allocateLicense, index) => 
                  <tr key={allocateLicense.srNo}>
                    <td>{index + 1}</td>
                    <td>{allocateLicense.employeeName}</td>
                    <td>{allocateLicense.emailId}</td>
                    <td>{allocateLicense.licenseType}</td>
                    <td>{allocateLicense.licenseNo}</td>
                    <td>{allocateLicense.assignDate}</td>
                    <td>
                      <div className="action_btn_wrap position-relative">
                        <button className="btn_action btn_border">
                          Active
                        </button>
                        <button className="btn_action pink deactive" onClick={renderPart}>
                          Deactive
                        </button>
                      </div>
                    </td>
                    <td>{allocateLicense.deactivationDate}</td>
                    <td>{allocateLicense.reason}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAllocateLicense;
