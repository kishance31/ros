import React from 'react';

const NewsLetterCard = (props) => {
    return (
        <div className="news_letter text-center d-flex align-items-center justify-content-center">
            <div data-aos="fade-up">
                <h2 className="title">{props.title}</h2>
                <p>{props.description}</p>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="your email address" />
                    </div>
                </form>
                <p><a className="btn news_letter_btn btn-lg " href="/#" role="button" >{props.btnName}</a></p>
            </div>
        </div>
    )
}

export default NewsLetterCard;