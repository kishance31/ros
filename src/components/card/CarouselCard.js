import React from 'react';

const CarouselCard = (props) => {

    const { imgsrc, alt, active, onButtonClick } = props;

    return (

        <div className={`carousel-item ${active}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex align-items-center" data-aos="fade-right">
                        <div className="slider-caption text-left">
                            <span>TOP TRENDING 2020</span>
                            <h1 className="title">SAVE <label style={{color:"#F95B3D"}}>MONEY</label> LIVE BETTER</h1>
                            <p className="body_text">Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium.</p>
                            <button type="button" className="btn" onClick={onButtonClick}>CORPORATE SIGNUP</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12" data-aos="fade-left"><img src={require(`../../assets/images/${imgsrc}`)} alt={alt || "slider_one"} className="slider_one" /></div>
            </div>
        </div>
        </div >

    )
}
export default CarouselCard;
