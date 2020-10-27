import React from 'react';

const OurServices = () => {
    return (
        <>
            <section class="container-fluid">
                <div class="section_about d-flex align-items-center flex-column pt_180">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 d-flex align-items-center">
                            <div class="about-caption text-left">
                                <span>Our Services</span>
                                <h1 class="title">User Friendly Platform</h1>
                                <p class="body_text">Proin et accumsan ipsum. Ut et purus vitae dolor commodo laoreet. Vestibulum rhoncus tempus elit quis laoreet. Pellentesque eget enim eget sapien egestas venenatis nec condimentum purus. Morbi facilisis orci ac tellus ullamcorper, ac convallis risus pharetra. Praesent porttitor nibh justo, eu facilisis magna dictum a. Quisque maximus porta aliquet.
                            </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class=""><img src={require(`../../assets/images/service1.png`)} alt="" className="about_img img-fluid" /></div>
                        </div>
                    </div>
                </div>
                <div class="section_about d-flex align-items-center flex-column">

                    <div class="row flex-column-reverse flex-lg-row">
                        <div class="col-lg-6 col-md-12">
                            <div class=""><img src={require(`../../assets/images/service1.png`)} alt="" className="about_img img-fluid" /></div>
                        </div>
                        <div class="col-lg-6 col-md-12 d-flex align-items-center">
                            <div class="about-caption text-left">
                                <h1 class="title">Employee Well Being</h1>
                                <p class="body_text">Proin et accumsan ipsum. Ut et purus vitae dolor commodo laoreet. Vestibulum rhoncus tempus elit quis laoreet. Pellentesque eget enim eget sapien egestas venenatis nec condimentum purus. Morbi facilisis orci ac tellus ullamcorper, ac convallis risus pharetra. Praesent porttitor nibh justo, eu facilisis magna dictum a. Quisque maximus porta aliquet.

                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section_about d-flex align-items-center flex-column">

                    <div class="row">
                        <div class="col-lg-6 col-md-12 d-flex align-items-center">
                            <div class="about-caption text-left">
                                <h1 class="title">Unique Workforce System</h1>
                                <p class="body_text">Proin et accumsan ipsum. Ut et purus vitae dolor commodo laoreet. Vestibulum rhoncus tempus elit quis laoreet. Pellentesque eget enim eget sapien egestas venenatis nec condimentum purus. Morbi facilisis orci ac tellus ullamcorper, ac convallis risus pharetra. Praesent porttitor nibh justo, eu facilisis magna dictum a. Quisque maximus porta aliquet.

                            </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class=""><img src={require(`../../assets/images/service1.png`)} alt="" className="about_img img-fluid" /></div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default OurServices;