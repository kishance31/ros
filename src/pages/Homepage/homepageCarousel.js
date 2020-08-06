import React from 'react';
import CarouselCard from '../../components/card/CarouselCard';
import { CarouselItems } from '../../utils/constants';


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
                        {CarouselItems.map((val, i) => { return (<CarouselCard imgsrc={val.imgsrc} />); })}
                    </div>

                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon mr-auto" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="44" viewBox="0 0 63 44">
                                <g id="Group_6" data-name="Group 6" transform="translate(-29 -429)">
                                    <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(29 429)"
                                        fill="#fff" stroke="#4d4949" stroke-width="1">
                                        <rect width="56" height="44" stroke="none" />
                                        <rect x="0.5" y="0.5" width="55" height="43" fill="none" />
                                    </g>
                                    <rect id="Rectangle_11" data-name="Rectangle 11" width="48" height="20"
                                        transform="translate(44 441)" fill="#fff" />
                                    <text id="PREV" transform="translate(52 456)" fill="#4d4949" font-size="12"
                                        font-family="Poppins-Medium, Poppins" font-weight="500" letter-spacing="0.2em">
                                        <tspan x="0" y="0">PREV</tspan>
                                    </text>
                                </g>
                            </svg>
                        </span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon ml-auto" aria-hidden="true">
                            <svg id="Group_7" data-name="Group 7" xmlns="http://www.w3.org/2000/svg" width="63"
                                height="44" viewBox="0 0 63 44">
                                <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(7)" fill="#fff"
                                    stroke="#4d4949" stroke-width="1">
                                    <rect width="56" height="44" stroke="none" />
                                    <rect x="0.5" y="0.5" width="55" height="43" fill="none" />
                                </g>
                                <rect id="Rectangle_11" data-name="Rectangle 11" width="48" height="20"
                                    transform="translate(0 12)" fill="#fff" />
                                <text id="NEXT" transform="translate(4 27)" fill="#4d4949" font-size="12"
                                    font-family="Poppins-Medium, Poppins" font-weight="500" letter-spacing="0.2em">
                                    <tspan x="0" y="0">NEXT</tspan>
                                </text>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default HomepageCarousel;
