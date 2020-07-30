import React from 'react';

const CarouselCard = (props) => {

    const{imgsrc,alt}=props;

    return (

        <div className="carousel-item active">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex align-items-center" data-aos="fade-right">
                        <div className="slider-caption text-left">
                            <span>TOP TRENDING 2020</span>
                            <h1 className="title">SAVE<label>MONEY</label> LIVE BETTER</h1>
                            <p className="body_text">Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium.</p>
                            <p><a className="btn order_now_btn btn-lg" href="#" role="button">ORDER NOW</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos="fade-left"><img src={require(`../../assets/images/${imgsrc}`)} alt={alt || "slider_one"} className="slider_one"/></div>
                </div>
            </div>
        </div>

    )
}
export default CarouselCard;
