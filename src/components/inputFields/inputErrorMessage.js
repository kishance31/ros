import React from 'react';

const DoubleErrorMessage = (props) => {
    const { leftError, leftTouched, rightError, rightTouched } = props;

    return (
        <>
            {
                (leftError && leftTouched) || (rightError && rightTouched) ? (
                    <div className="error_wrap">
                        <div className="left_side"> {
                            leftError && leftTouched ? (
                                <div className="error_msg">{leftError}</div>
                            ) : null
                        }
                        </div>
                        {
                            rightError && rightTouched ? (
                                <div className="right_side">
                                    <div className="error_msg">{rightError}</div>
                                </div>
                            ) : null
                        }
                    </div>
                ) : null
            }
        </>
    )
}

export default DoubleErrorMessage;