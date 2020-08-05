import React from 'react';
import PropTypes from 'prop-types';
const DoubleInputField = (props) => {
    const {
        placeholder1,
        placeholder2,
        type1,
        type2,
        id1,
        id2
    } = props;

    return (
        <>
            <div class="input-group">
                <input placeholder={placeholder1} type={type1} id={id1} class="input_box_1 form-control" />
                <input placeholder={placeholder2} type={type2} id={id2} class="input_box_2 form-control" />
                {props.children}
            </div>
        </>)
}

export default DoubleInputField;

DoubleInputField.propTypes = {
    placeholder1: PropTypes.string,
    placeholder2: PropTypes.string,
    type1: PropTypes.string,
    type2: PropTypes.string,
    id1: PropTypes.string,
    id2: PropTypes.string
}