import React, { useState } from 'react';
import { faqsData } from '../../utils/constants';

const FAQS = () => {

    const [selectedIdx, setSelectedIdx] = useState(0)

    const onQuesClick = (idx) => {
        if(idx === selectedIdx) {
            return setSelectedIdx(0);
        }
        setSelectedIdx(idx);
    }

    return (
        <div className="container-fluid">
            <div className="faq">
                <div className="col-lg-12" id="accordion" className="accordion">
                    <h1>Frequently Asked Question (FAQ)</h1>
                    {
                        faqsData.map((faq, idx) => (
                            <div className="row">
                                <div className="col-lg-6 questions">
                                    <h3 className={`${selectedIdx === (idx + 1) ? "" : "collapsed"}`} onClick={() => onQuesClick(idx+ 1)} >
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