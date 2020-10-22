import React from 'react';
import { useSelector } from 'react-redux';
import TextCardComponent from '../../components/card/textCard';
import NewsLetterCard from '../../components/card/newsLetterCard';
import { ContactUsDetails, ContactusLinks, NewsLetterDetails } from '../../utils/constants';
const AboutUs = () => {
    const data = useSelector(state => state.homepageContent.aboutUsDetais[0])
    return (
        <>
            {
                data ?
                <section className="container-fluid">
                    <div className="section_about d-flex align-items-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 d-flex align-items-center">
                                <div className="about-caption text-left">
                                    <span>ABOUT US</span>
                                    <h1 className="title">Lorem ipsum dolor sit amet<br />consectetur adipiscing elit</h1>
                                    <p className="body_text">
                                        {data.description}
                                        </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12"> 
                                <div><img src={data.aboutUsImage} alt="" className="about_img img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                </section> : null
            }
            <section className="section_four">
                <div className="container-fluid pt-0">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <TextCardComponent name="Contact Us" sName="Get In Touch" items={ContactUsDetails}>
                                <div className="col-4 d-flex justify-content-end align-items-center" data-aos="fade-up">
                                    <ul className="list-unstyled text-small">
                                        {
                                            ContactusLinks.map((links, i) => <li key={i}><a href={links.url}>{links.name}</a></li>)
                                        }
                                    </ul>
                                </div>
                            </TextCardComponent>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <NewsLetterCard {...NewsLetterDetails} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;