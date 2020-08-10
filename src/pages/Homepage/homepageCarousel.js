import React from 'react';
import CarouselCard from '../../components/card/CarouselCard';
import { CarouselItems } from '../../utils/constants';
import {LeftRectangleBox, NextRectangleBox} from '../../components/icons/Icons';


const HomepageCarousel = () => {

    return (

        <section className="section_one">
            <div className="container-fluid">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators d-flex align-items-center">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        {CarouselItems.map((val, i) =>  <CarouselCard key={i} imgsrc={val.imgsrc} active={i === 0 ? "active" : ""} />)}
                    </div>

                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon mr-auto" aria-hidden="true">
                            <LeftRectangleBox />
                        </span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon ml-auto" aria-hidden="true">
                        <NextRectangleBox />
                        </span>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default HomepageCarousel;
