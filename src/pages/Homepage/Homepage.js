import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import FooterContainer from '../../containers/footer/footer';
import HomepageCards from './homepageCards';
import HomepageCarousel from './homepageCarousel';
import { fetchConstactUsDetailsAsync } from '../../actions/homepageContent.action';
const Homepage = () => {
    const dispatch = useDispatch();
    const contactUsData = useSelector(state => state.homepageContent.contactUsDetais);
    useEffect(() => {
        if (!contactUsData.email) {
            dispatch(fetchConstactUsDetailsAsync());
        }
    }, [contactUsData])
    return (
        <>
            <main role="main">
                <HomepageCarousel />
                <HomepageCards />
            </main>
            {/* <FooterContainer /> */}
        </>
    )
}

export default Homepage;