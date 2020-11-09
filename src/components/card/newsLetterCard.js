import React from 'react';
import axios from 'axios';
import { Formik, Field, } from 'formik';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';
import notificationActions from '../../actions/notifications.action';
import { useDispatch } from 'react-redux';
import getServerCore from '../../utils/apiUtils';

const NewsLetterCard = (props) => {

    const dispatch = useDispatch();

    const { serverUrl } = getServerCore();

    const newsLetterAPI = async (details) => {
        let { data } = await axios({
            url: `${serverUrl}/admin/cms/saveNewsLetter`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                ...details,
            }
        });
        if (data.response.responseCode === 200) {
            dispatch(notificationActions.showNotification({
                title: "News Letter Subscription",
                message: "News letter subscription successful",
                color: 'success',
            }));
        }
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: ""
                }}

                validate={(values) => {
                    const errors = {};
                    for (let key in values) {
                        if (!values[key].trim()) {
                            if (key === "email") {
                                errors[key] = `Email is required.`
                            }
                        }
                    }
                    return errors;
                }}

                onSubmit={(values, { resetForm }) => {
                    newsLetterAPI(values);
                    resetForm({ values: "" })
                }}
            >
                {({
                    errors,
                    touched,
                    isSubmitting,
                    handleSubmit,
                }) => (
                        <div className="news_letter text-center d-flex align-items-center justify-content-center">
                            <div data-aos="fade-up">
                                <h2 className="title">{props.title}</h2>
                                <p>{props.description}</p>
                                <form className="form-group">
                                    <Field
                                        placeholder="YOUR EMAIL ADDRESS"
                                        type='email'
                                        id="exampleFormControlInput1"
                                        name='email'
                                        className="form-control" />
                                    <DoubleErrorMessage
                                        leftError={errors.email}
                                        leftTouched={touched.email}
                                        className="news_letter_error"
                                    />
                                    <p>
                                        <button type="submit" className="btn news_letter_btn btn-lg"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                        >
                                            SEND
                                        </button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    )}
            </Formik>
        </>
    )
}

export default NewsLetterCard;


