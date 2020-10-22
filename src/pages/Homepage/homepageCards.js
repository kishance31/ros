import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicCardComponent from '../../components/card/basicCard';
import TextCardComponent from '../../components/card/textCard';
import NewsLetterCard from '../../components/card/newsLetterCard';
import { fetchConstactUsDetailsAsync, fetchAboutUsDetailsAsync } from '../../actions/homepageContent.action';
import { HomePageCardData, ContactusLinks, NewsLetterDetails } from '../../utils/constants';

const HomepageCards = () => {
    alert('1234')
    const refereshdata = useSelector(state => state.homepageContent.contactUsDetais.refreshData)
    console.log('refereshdata111111111', refereshdata);
    const dispatch = useDispatch()
    useEffect(() => {
        alert('USE')
            dispatch(fetchConstactUsDetailsAsync());
            dispatch(fetchAboutUsDetailsAsync());
    }, [])

    return (
        <>
            <section className="section_two">
                <div className="container-fluid">
                    <div className="row homepage_product_card">
                        {
                            HomePageCardData.map((val) =>
                                <div key={val.id} className={`col-lg-${val.card_size || 12}`}>
                                    <div className={`card_wrap ${val.cardAlign || ""}`}>
                                        <BasicCardComponent {...val} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>

            <section className="section_four">
                <div className="container-fluid pt-0">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <TextCardComponent name="Contact Us" sName="Get In Touch">
                                <div className="col-4 d-flex justify-content-end align-items-center" data-aos="fade-up">
                                    <ul className="list-unstyled text-small">
                                        {
                                            ContactusLinks.map((links, i) => <li key={i}><a href={links.url}>{links.name}</a></li>)
                                        }
                                    </ul>
                                </div>
                            </TextCardComponent>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <NewsLetterCard {...NewsLetterDetails} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomepageCards;