import React, { useEffect } from 'react';
import TextCardComponent from '../../components/card/textCard';
import FAQCard from '../../components/card/faqCard';
import { ContactusLinks, NewsLetterDetails } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGoogle, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { getSocialLinksAsync } from '../../actions/faq.action';

const HomepageCards = () => {

    const dispatch = useDispatch();

    const { socialLinksList, refreshLinkData } = useSelector(state => state.faq);

    useEffect(() => {
        if (refreshLinkData) {
            dispatch(getSocialLinksAsync())
        }
    }, [refreshLinkData])

    return (
        <>
            {/* <section class="container-fluid mb-5">
                <div className="home_categories">
                    <h2>Our Categories</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="category">
                                <img src={require(`../../assets/images/category1.png`)} alt="" className="img-fluid" />
                                <p>Home Office Furniture's & Accessories</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="category">
                                <img src={require(`../../assets/images/category2.png`)} alt="" className="img-fluid" />
                                <p>Home Office Electronics</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="category">
                                <img src={require(`../../assets/images/category3.png`)} alt="" className="img-fluid" />
                                <p>Home Office Computers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className="section_two">
                <div className="container-fluid">
                    <div className="row homepage_product_card">
                        {
                            HomePageCardData.map((val) =>
                                <div key={val.id} className={`col-lg-${val.card_size || 12}`}>
                                    <div className={`card_wrap ${val.cardAlign || ""}`}>
                                        <BasicCardComponent {...val} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div> 
            </section>*/}
            <section className="section_four">
                <div className="container-fluid pt-0">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <TextCardComponent name="Contact Us" sName="Get In Touch">
                                <div className="col-4 d-flex justify-content-end align-items-center" data-aos="fade-up">
                                    <ul className="list-unstyled text-small">
                                        {/* {
                                            ContactusLinks.map((links, i) => <li key={i}><a href={links.url}>{links.name}</a></li>)
                                        } */}
                                        <li><a href={socialLinksList.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
                                        <li><a href={socialLinksList.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li><a href={socialLinksList.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        <li><a href={socialLinksList.google}><FontAwesomeIcon icon={faGoogle} /></a></li>
                                        <li><a href={socialLinksList.pinterest}><FontAwesomeIcon icon={faPinterest} /></a></li>
                                    </ul>
                                </div>
                            </TextCardComponent>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <FAQCard {...NewsLetterDetails} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomepageCards;