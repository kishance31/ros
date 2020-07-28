import React from 'react';
import FooterContainer from '../../containers/footer/footer';
import HomepageCards from './homepageCards';

const Homepage = () => {
    return (
        <>
            <main role="main">
                <HomepageCards />
            </main>
            <FooterContainer />
        </>

    )
}

export default Homepage;