import React from 'react';
import { Input } from 'reactstrap';
import BasicCardComponent from '../../components/card/basicCard';
import TextCardComponent from '../../components/card/textCard'
import { HomePageCardData, ContactUsDetails, ContactusLinks, NewsLetterDetails } from '../../utils/constants';

const HomepageCards = () => {
    console.log(NewsLetterDetails)

    return (
        <>
            <div className="container-fluid">
                <div className="row homepage_product_card">
                    {
                        HomePageCardData.map((val) =>
                            <div className="col-lg-12">
                                <div className="card_wrap horizontal_content">
                                    <BasicCardComponent key={val.id} btnName={val.btnName} souc={val.souc} title={val.title} description={val.description} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="container-fluid pt-0">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contactus_card">

                            <TextCardComponent name="Contact Us" sName="Get In Touch" cardText={ContactUsDetails}>
                                <div className="col-lg-3 social_links">
                                    {
                                        ContactusLinks.map((props, i) => <ol key={i}> {props} </ol>)
                                    }
                                </div>
                            </TextCardComponent>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="newsletter_card">
                            <BasicCardComponent
                                btnName={NewsLetterDetails.btnName}
                                souc={NewsLetterDetails.souc}
                                title={NewsLetterDetails.title}
                                description={NewsLetterDetails.description}
                            >
                                <Input placeholder="your email address" />
                            </BasicCardComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageCards;