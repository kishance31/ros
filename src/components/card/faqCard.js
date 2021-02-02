import React from 'react';
import { useDispatch } from 'react-redux';
import AuthModalAction, { AuthMap } from '../../actions/auth.action';

const FAQCard = (props) => {

    const dispatch = useDispatch();


    const navigateToSignUp = (e) => {
        e.preventDefault();
        dispatch(AuthModalAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_UP_MODAL, "Sign Up"))
    }

    return (
        <div className="news_letter text-center d-flex align-items-center justify-content-center">
            <div className="row contact_us" style={{paddingLeft: "60px", textAlign: 'left'}}>
                <div data-aos="fade-up">
                    <h2 className="title">{props.title}</h2>
                    <p style={{ fontSize: "18px", marginTop: "2rem" }}>{props.description}</p>
                    <form className="form-group" onSubmit={navigateToSignUp}>
                        <p>
                            <button type="submit" className="btn news_letter_btn btn-lg">
                                SIGN UP
                            </button>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default FAQCard;
