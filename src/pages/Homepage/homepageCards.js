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
            {
                HomePageCardData.map((val) =>
                    <BasicCardComponent key={val.id} btnName={val.btnName} souc={val.souc} title={val.title} description={val.description} />
                )
            }
            <TextCardComponent name="Contact Us" sName="Get In Touch" items={ContactUsDetails}>
           
                <div className="row contact_us">
                    <div className="col-4 d-flex justify-content-end align-items-center" data-aos="fade-up">
                        <ul className="list-unstyled text-small">
                            {
                                ContactusLinks.map((props, i) => <li key={i}><a href="#">{props}</a></li>)
                            }
                        </ul>
                    </div>
                </div>
     
                <BasicCardComponent

                    btnName={NewsLetterDetails.btnName}
                    souc={NewsLetterDetails.souc}
                    title={NewsLetterDetails.title}
                    description={NewsLetterDetails.description}
                >
                    <Input placeholder="your email address"/>
                </BasicCardComponent>
            </TextCardComponent>
        </>
    )
}

export default HomepageCards;