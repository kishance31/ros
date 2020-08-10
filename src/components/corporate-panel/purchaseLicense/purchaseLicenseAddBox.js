import React from 'react';
import ShadowCard from '../../card/shadowCard';

const PurchaseLicenseAddBox = () => {
    return (
        <ShadowCard className="mr-0 mr-xl-3">
            <form>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="input-group">
                            <label>Date</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                    <div className="col-lg-3">
                        <div className="input-group">
                            <label>Order No</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group">
                            <label>NAME OF ORGANIZATION</label>
                            <input type="text" className="form-control" placeholder="" />
                            <span className="error_msg">Error message here</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <label>License Type</label>
                            <select title="Select" className="selectpicker form-control">
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group">
                            <label>No. of License</label>
                            <input type="text" className="form-control" placeholder="" />
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