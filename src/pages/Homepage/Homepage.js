import React from 'react';
import FooterContainer from '../../containers/footer/footer';
import ContactUs from '../../components/ContactUs/ContactUs';
import CardBasic from '../../components/card/basicCard';
import Sdata from '../../components/card/CardData';

const Homepage = () => {
    return (
        <>
            <main>
                {Sdata.map((val) => {
                    return (
                        <CardBasic key={val.id} btnName={val.btnName} souc={val.souc} title={val.title} description={val.description} />
                    )
                })}
                <ContactUs />
            </main>
            <FooterContainer />
        </>

    )
}

export default Homepage;