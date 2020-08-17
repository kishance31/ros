import React from 'react';

const EmployeeLicenseManagement = () => {
    return (
        <div class="side_space">
            <div class="page_title">Available License</div>

            <div class="top_bar">
                <div class="license_detail">
                    <ul>
                        <li class="bg_pink">
                            <span>Silver</span>
                            <span>10</span>
                        </li>
                        <li class="bg_light_blue">
                            <span>Gold</span>
                            <span>10</span>
                        </li>
                        <li class="bg_orange">
                            <span>Platinum</span>
                            <span>10</span>
                        </li>
                    </ul>
                </div>
                <div class="btn_wrp">
                    <button class="btn_blue">Import File</button>
                    <button class="btn_blue" data-target="#add_employeement" data-toggle="modal">Add</button>
                </div>
            </div>

            
            <div class="container-fluid">
                <div class="shadow_box">
                    <div class="general_table table-responsive">
                        <table class="">
                            <thead>
                                <tr>
                                    <th>Sr&nbsp;No</th>
                                    <th>EMPLOYEE&nbsp;NAME</th>
                                    <th>EMAIL&nbsp;ID</th>
                                    <th>License&nbsp;TYPE</th>
                                    <th>BRANCH</th>
                                    <th class="action_col">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Milan</td>
                                    <td>milan@gmail.com</td>
                                    <td>Silver</td>
                                    <td>Ahmedabad</td>
                                    <td class="action_col">
                                        <div class="action_btn_wrap">
                                            <button class="btn_action btn_border">Edit</button>
                                            <button class="btn_action pink">Delete</button>
                                            <button class="btn_action orange">Invitation Send</button>
                                            <button class="btn_action light_blue">Resend Invitation</button>
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
                                        <div class="action_btn_wrap">
                                            <button class="btn_action btn_border">Edit</button>
                                            <button class="btn_action pink">Delete</button>
                                            <button class="btn_action orange">Invitation Send</button>
                                            <button class="btn_action light_blue">Resend Invitation</button>
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
                                        <div class="action_btn_wrap">
                                            <button class="btn_action btn_border">Edit</button>
                                            <button class="btn_action pink">Delete</button>
                                            <button class="btn_action orange">Invitation Send</button>
                                            <button class="btn_action light_blue">Resend Invitation</button>
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