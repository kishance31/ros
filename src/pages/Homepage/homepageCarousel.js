import React from 'react';
import { useDispatch } from 'react-redux';
import CarouselCard from '../../components/card/CarouselCard';
import AuthModelAction, { AuthMap } from '../../actions/auth.action'
import { CarouselItems } from '../../utils/constants';
import { LeftRectangleBox, NextRectangleBox } from '../../components/icons/Icons';


const HomepageCarousel = () => {

    const dispatch = useDispatch();

    const showSignUpModal = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_UP_MODAL, "Corporate Sign Up"));
    }

    return (

        <>
            {/* MAIN BANNER */}
            <div class="container-fluid">
                <div class="homebanner">
                    <div class="row">
                        <div class="col-lg-6 hv_center">
                            <div class="visual_content">
                                <h1>
                                    <span className="t1">Remote&nbsp;</span>
                                    <span className="t2">Office</span><br />
                                    <span className="t3">Solution</span>
                                </h1>
                                <p>Our solution (ROS – Remote Office Solution) focus is to provide corporates a platform to be a forward leaning company on remote work at their scale.</p>
                                <button type="button" className="btn mt-4 mt-lg-3" onClick={showSignUpModal}>CORPORATE SIGNUP</button>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="visual">
                                <img src={require(`../../assets/images/main-banner.png`)} alt="" className="about_img img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="container-fluid ">
                <div class="well_managed">
                    <div class="row">
                        <div class="col-lg-6 visual">
                            <img src={require(`../../assets/images/about_img.png`)} alt="" className="about_img img-fluid" />
                        </div>
                        <div class="col-lg-6">
                            <p class="visual_content">Well-managed home office environment can make orporate employees as effective as a face-to-face — and a lot easier and less expensive to maintain. You can argue corporate workforces will be less remote in 10 years than their leaders are predicting today, but surely much more remote than hey could have imagined six months ago. The real issue, owever, is not whose predictions turn out to be right or wrong (no one has a crystal ball), but whether you as a corporate leader thinking deeply enough about what you want your new corporate work paradigm to achieve — and that is exactly our platform can architect and construct which will allow corporate to meet their objectives. Using our platform corporate employees will feel most creative and productive…even once offices begin to reopen.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* OUR SERVICES */}
            <section class="container-fluid services">
                <div class="section_about mt-5">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="about-caption text-left">
                                <h1 class="title">User Friendly Platform</h1>
                                <p class="body_text">Proin et accumsan ipsum. Ut et purus vitae dolor commodo laoreet. Vestibulum rhoncus tempus elit quis laoreet. Pellentesque eget enim eget sapien egestas venenatis nec condimentum purus. Morbi facilisis orci ac tellus ullamcorper, ac convallis risus pharetra. Praesent porttitor nibh justo, eu facilisis magna dictum a. Quisque maximus porta aliquet.
                            </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <video poster="/static/media/service1.61c55ec9.png" controls>
                                <source src="https://ak.picdn.net/shutterstock/videos/1043775205/preview/stock-footage-microbiology-laboratory-scientist-works-with-petri-dishes-with-various-bacteria-tissue-and-blood.mp4" type="video/mp4"></source>
                            </video>
                            {/* <div class=""><img src={require(`../../assets/images/service1.png`)} alt="" className="about_img img-fluid" /></div> */}
                        </div>
                    </div>
                </div>
                <div class="section_about">

                    <div class="row flex-column-reverse flex-lg-row">
                        <div class="col-lg-6 col-md-12">
                            <video poster="/static/media/service1.61c55ec9.png" controls>
                                <source src="https://ak.picdn.net/shutterstock/videos/1043775205/preview/stock-footage-microbiology-laboratory-scientist-works-with-petri-dishes-with-various-bacteria-tissue-and-blood.mp4" type="video/mp4"></source>
                            </video>
                        </div> 
                        <div class="col-lg-6 col-md-12">
                            <div class="about-caption text-left pl-lg-5 pl-0">
                                <h1 class="title">Employee Well Being</h1>
                                <p class="body_text">Proin et accumsan ipsum. Ut et purus vitae dolor commodo laoreet. Vestibulum rhoncus tempus elit quis laoreet. Pellentesque eget enim eget sapien egestas venenatis nec condimentum purus. Morbi facilisis orci ac tellus ullamcorper, ac convallis risus pharetra. Praesent porttitor nibh justo, eu facilisis magna dictum a. Quisque maximus porta aliquet.

                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section_about">

                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="about-caption text-left">
                                <h1 class="title">Unique Workforce System</h1>
                                <p class="body_text">Proin et accumsan ipsum. Ut et purus vitae dolor commodo laoreet. Vestibulum rhoncus tempus elit quis laoreet. Pellentesque eget enim eget sapien egestas venenatis nec condimentum purus. Morbi facilisis orci ac tellus ullamcorper, ac convallis risus pharetra. Praesent porttitor nibh justo, eu facilisis magna dictum a. Quisque maximus porta aliquet.

                            </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <video poster="/static/media/service1.61c55ec9.png" controls>
                                <source src="https://ak.picdn.net/shutterstock/videos/1043775205/preview/stock-footage-microbiology-laboratory-scientist-works-with-petri-dishes-with-various-bacteria-tissue-and-blood.mp4" type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}

        </>

        // <section className="section_one">
        //     <div className="container-fluid">
        //         <div id="myCarousel" className="carousel slide" data-ride="carousel">
        //             <ol className="carousel-indicators d-flex align-items-center">
        //                 <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        //                 <li data-target="#myCarousel" data-slide-to="1" className=""></li>
        //                 <li data-target="#myCarousel" data-slide-to="2" className=""></li>
        //             </ol>
        //             <div className="carousel-inner">
        //                 {
        //                     CarouselItems.map((val, i) =>
        //                         <CarouselCard
        //                             key={i} 
        //                             imgsrc={val.imgsrc} 
        //                             active={i === 0 ? "active" : ""}
        //                             onButtonClick={showSignUpModal}
        //                         />
        //                     )
        //                 }
        //             </div>

        //             <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        //                 <span className="carousel-control-prev-icon mr-auto" aria-hidden="true">
        //                     <LeftRectangleBox />
        //                 </span>
        //             </a>
        //             <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        //                 <span className="carousel-control-next-icon ml-auto" aria-hidden="true">
        //                 <NextRectangleBox />
        //                 </span>
        //             </a>
        //         </div>
        //     </div>
        // </section >

    )
}

export default HomepageCarousel;
