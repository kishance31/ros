import React from 'react';
import { useDispatch } from 'react-redux';
import AuthModelAction, { AuthMap } from '../../actions/auth.action'
import getServerCore from '../../utils/apiUtils';

const { serverUrls } = getServerCore();
const finalUrl = serverUrls.getHost() + ":" + serverUrls.getPort();

const HomepageCarousel = () => {

    const dispatch = useDispatch();

    const showSignUpModal = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_UP_MODAL, "Corporate Sign Up"));
    }

    return (

        <>
            {/* MAIN BANNER */}
            <div className="container-fluid">
                <div className="homebanner">
                    <h1>Remote Office Solution</h1>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="visual">
                                <img src={require(`../../assets/images/main-banner.png`)} alt="" className="about_img img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-12 hv_center">
                            <div className="visual_content">
                                <p>Our solution (ROS – Remote Office Solution) focus is to provide corporates a<br /> platform to be a forward leaning company on remote work at their scale.</p>
                                <button type="button" className="btn mt-4 mt-lg-3" onClick={showSignUpModal}>CORPORATE SIGNUP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container-fluid ">
                <div className="well_managed">
                    <div className="row">
                        <div className="col-lg-6 visual">
                            <img src={require(`../../assets/images/about_img.png`)} alt="" className="about_img img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <p className="visual_content">Well-managed home office environment can make orporate employees as effective as a face-to-face — and a lot easier and less expensive to maintain. You can argue corporate workforces will be less remote in 10 years than their leaders are predicting today, but surely much more remote than hey could have imagined six months ago. The real issue, owever, is not whose predictions turn out to be right or wrong (no one has a crystal ball), but whether you as a corporate leader thinking deeply enough about what you want your new corporate work paradigm to achieve — and that is exactly our platform can architect and construct which will allow corporate to meet their objectives. Using our platform corporate employees will feel most creative and productive…even once offices begin to reopen.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* OUR SERVICES */}
            <section className="container-fluid services">
                <div className="section_about mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-caption text-left">
                                <h1 className="title">
                                    <span className="t1">User&nbsp;</span>
                                    <span className="t2">Friendly&nbsp;</span>
                                    <span className="t3">Platform</span>
                                </h1>
                                <p className="body_text">“Ease of use – friendly platform”
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <video controls poster={require(`../../assets/images/service1.png`)}>
                                <source src={`${finalUrl}/static/videos/ROS%20-%20Unique%20Workforce%20System.mp4`} type="video/mp4"></source>
                            </video>
                            {/* <div className=""><img src={require(`../../assets/images/service1.png`)} alt="" className="about_img img-fluid" /></div> */}
                        </div>
                    </div>
                </div>
                <div className="section_about">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 col-md-12">
                            <video controls poster={require(`../../assets/images/service2.png`)}>
                                <source src={`${finalUrl}/static/videos/ROS - User Friendly Platform.mp4`} type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-caption text-left pl-lg-5 pl-0">
                                <h1 className="title">
                                    <span className="t1">Employee&nbsp;</span>
                                    <span className="t2">Well&nbsp;</span>
                                    <span className="t3">Being</span>
                                </h1>
                                <p className="body_text">“Peace of Mind” </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_about">

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-caption text-left">
                                <h1 className="title">
                                    <span className="t1">Unique&nbsp;</span>
                                    <span className="t2">Workforce&nbsp;</span>
                                    <span className="t3">System</span>
                                </h1>
                                <p className="body_text">“Make things possible”</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <video controls poster={require(`../../assets/images/service3.png`)}>
                                <source src={`${finalUrl}/static/videos/ROS- Employees Well Being.mp4`} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomepageCarousel;
