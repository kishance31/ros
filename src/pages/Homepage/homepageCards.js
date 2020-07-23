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
            <TextCardComponent name="Contact Us" sName="Get In Touch" cardText={ContactUsDetails}>
                {
                    ContactusLinks.map((props, i) => <ol key={i}> {props} </ol>)
                }
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