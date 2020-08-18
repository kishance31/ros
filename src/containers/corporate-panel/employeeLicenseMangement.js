import React from 'react';

const EmployeeLicenseManagement = () => {
    return (
        <div className="side_space">
            <div className="page_title">Available License</div>

            <div className="top_bar">
                <div className="license_detail">
                    <ul>
                        <li className="bg_pink">
                            <span>Silver</span>
                            <span>10</span>
                        </li>
                        <li className="bg_light_blue">
                            <span>Gold</span>
                            <span>10</span>
                        </li>
                        <li className="bg_orange">
                            <span>Platinum</span>
                            <span>10</span>
                        </li>
                    </ul>
                </div>
                <div className="btn_wrp">
                    <button className="btn_blue">Import File</button>
                    <button className="btn_blue" data-target="#add_employeement" data-toggle="modal">Add</button>
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
                                <tr>
                                    <td>1</td>
                                    <td>Milan</td>
                                    <td>milan@gmail.com</td>
                                    <td>Silver</td>
                                    <td>Ahmedabad</td>
                                    <td className="action_col">
                                        <div className="action_btn_wrap">
                                            <button className="btn_action btn_border">Edit</button>
                                            <button className="btn_action pink">Delete</button>
                                            <button className="btn_action orange">Invitation Send</button>
                                            <button className="btn_action light_blue">Resend Invitation</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Milan</td>
                                    <td>milan@gmail.com</td>
                                    <td>Silver</td>
                                    <td>Ahmedabad</td>
                                    <td>
                                        <div className="action_btn_wrap">
                                            <button className="btn_action btn_border">Edit</button>
                                            <button className="btn_action pink">Delete</button>
                                            <button className="btn_action orange">Invitation Send</button>
                                            <button className="btn_action light_blue">Resend Invitation</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Milan</td>
                                    <td>milan@gmail.com</td>
                                    <td>Silver</td>
                                    <td>Ahmedabad</td>
                                    <td>
                                        <div className="action_btn_wrap">
                                            <button className="btn_action btn_border">Edit</button>
                                            <button className="btn_action pink">Delete</button>
                                            <button className="btn_action orange">Invitation Send</button>
                                            <button className="btn_action light_blue">Resend Invitation</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeLicenseManagement;