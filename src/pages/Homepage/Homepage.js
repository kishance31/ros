import React from 'react';
import FooterContainer from '../../containers/footer/footer';
import HomepageCards from './homepageCards';
import HomepageCarousel from './homepageCarousel';

const Homepage = () => {

    return (
        <>
            <main role="main">
                <HomepageCarousel/>
                <HomepageCards />
            </main>
            <FooterContainer />
        </>
    )
}

export default Homepage;