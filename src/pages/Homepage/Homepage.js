import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FooterContainer from '../../containers/footer/footer';
import HomepageCards from './homepageCards';
import HomepageCarousel from './homepageCarousel';
import { fetchConstactUsDetailsAsync, fetchAboutUsDetailsAsync } from '../../actions/homepageContent.action';
const Homepage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchConstactUsDetailsAsync());
        dispatch(fetchAboutUsDetailsAsync());
    }, [])
    return (
        <>
            <main role="main">
                <HomepageCarousel />
                <HomepageCards />
            </main>
            <FooterContainer />
        </>
    )
}

export default Homepage;