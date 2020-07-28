import React from 'react';
import BasicCardComponent from '../../components/card/basicCard';
import TextCardComponent from '../../components/card/textCard'
import { HomePageCardData, ContactUsDetails, ContactusLinks, NewsLetterDetails } from '../../utils/constants';

const HomepageCards = () => {
    console.log(NewsLetterDetails)
    return (
        <>
            <section className="section_two">
                <div className="container-fluid">
                    <div className="rowhomepage_product_card">
                        {
                            HomePageCardData.map((val) =>
                                <BasicCardComponent key={val.id} cardAligin={val.cardAligin} card_size={val.card_size} btnName={val.btnName} souc1={val.souc1} souc2={val.souc2} title={val.title} description={val.description} />
                            )
                        }
                    </div>
                </div>
            </section>

            <TextCardComponent name="Contact Us" sName="Get In Touch" cardText={ContactUsDetails}>
                {
                    ContactusLinks.map((props, i) => <ol key={i}> {props} </ol>)
                }
                <div className="col-lg-4 col-sm-12">
                    <div className="news_letter text-center d-flex align-items-center justify-content-center">
                        <div data-aos="fade-up">
                            <h2 className="title">{NewsLetterDetails.title}</h2>
                            <p>{NewsLetterDetails.description}</p>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                        placeholder="your email address" />
                                </div>
                            </form>
                            <p><a className="btn news_letter_btn btn-lg " href="/#" role="button" >{NewsLetterDetails.btnName}</a></p>
                        </div>
                    </div>
                </div>
            </TextCardComponent>
        </>
    )
}

export default HomepageCards;