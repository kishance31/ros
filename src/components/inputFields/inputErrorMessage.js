import React from 'react';

const DoubleErrorMessage = (props) => {
    const { leftError, leftTouched, rightError, rightTouched } = props;

    return (
        <>
            {
                (leftError && leftTouched) || (rightError && rightTouched) ? (
                    <div class="error_wrap">
                        {
                            leftError && leftTouched ? (
                                <div class="left_side">
                                    <div class="error_msg">{leftError}</div>
                                </div>
                            ) : null
                        }
                        {
                            rightError && rightTouched ? (
                                <div class="right_side">
                                    <div class="error_msg">{rightError}</div>
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