import React, { useEffect, useState } from 'react';
import { faqsData } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getFAQSAsync } from '../../actions/faq.action';

const FAQS = () => {

    const [selectedIdx, setSelectedIdx] = useState(0)

    const onQuesClick = (idx) => {
        console.log(idx)
        if (idx === selectedIdx) {
            return setSelectedIdx(0);
        }
        setSelectedIdx(idx);
    }

    const dispatch = useDispatch();

    const { FAQList, refreshFAQData } = useSelector(state => state.faq);

    useEffect(() => {
        if (refreshFAQData) {

            dispatch(getFAQSAsync())
        }
    }, [refreshFAQData])

    return (
        <div className="container-fluid">
            <div className="faq">
                <div className="col-lg-12" id="accordion">
                    <h1>Frequently Asked Question (FAQ)</h1>
                    {
                        FAQList.map((faq, idx) => (
                            <div className="row">
                                <div className="col-lg-6 questions">
                                    <h3 className={`${selectedIdx === (idx + 1) ? "" : "collapsed"}`} onClick={() => onQuesClick(idx + 1)} >
                                        <p>
                                            <span>Q{idx + 1}.</span>
                                            {faq.question}
                                        </p>
                                    </h3>
                                    {
                                        selectedIdx === (idx + 1) ? (
                                            <p>{faq.answer}</p>
                                        ) : null
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQS;