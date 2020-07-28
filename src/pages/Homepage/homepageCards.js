import React from 'react';
import {Input} from 'reactstrap';
import BasicCardComponent from '../../components/card/basicCard';
import TextCardComponent from '../../components/card/textCard'
import { HomePageCardData, ContactUsDetails, ContactusLinks, NewsLetterDetails } from '../../utils/constants';

const HomepageCards = () => {
    console.log(NewsLetterDetails)

    return (
        <>
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