import React from 'react';
import ShadowCard from '../../card/shadowCard';
import { checkPropTypes } from 'prop-types';

const PurchaseLicenseAddBox = (props) => {

    const { availableLicenseList, addLicense } = props;

    const currDate = new Date().toLocaleDateString();

    return (

        <ShadowCard className="mr-0 mr-xl-3">
            <form onSubmit={addLicense}>
                <div className="row">
                    <div className="col-lg-3" >
                        <div className="input-group">
                            <label>Date</label>
                            <input type="text" className="form-control" placeholder=""
                                value={currDate} disabled={true} required={true} />
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                    <div className="col-lg-3">
                        <div className="input-group">
                            <label>Order No</label>
                            <input type="text" className="form-control" placeholder="ROS-12345"
                                disabled={true} required={true} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group">
                            <label>NAME OF ORGANIZATION</label>
                            <input type="text" className="form-control" placeholder="COMPANY NAME"
                                disabled={true} required={true} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <label>License Type</label>
                            <select name="licenseType" title="Select" className="selectpicker form-control">
                                {
                                    availableLicenseList.map(item => (
                                        <option key={item.type} value={item.type}>{item.type}</option>
                                        ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group">
                            <label>No. of License</label>
                            <input name="quantity" type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <button className="btn_blue">Add</button>
                </div>
            </form>
        </ShadowCard>
    )
}

export default PurchaseLicenseAddBox;