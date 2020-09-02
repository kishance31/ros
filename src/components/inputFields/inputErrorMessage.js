import React from 'react';

const DoubleErrorMessage = (props) => {
    const { leftError, leftTouched, rightError, rightTouched } = props;

    return (
        <>
            {
                (leftError && leftTouched) || (rightError && rightTouched) ? (
                    <div className="error_wrap">
                        {
                            leftError && leftTouched ? (
                                <div className="left_side">
                                    <div className="error_msg">{leftError}</div>
                                </div>
                            ) : null
                        }
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