import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalComponent = (props) => {

    const {
        id,
        isOpen,
        toggleModal,
        className,
        title,
        centered,
        footer,
        closeIcon
    } = props;

    return (
        <Modal isOpen={isOpen} toggle={toggleModal} centered={!!centered} className={className} id={id || ""}>
            {
                closeIcon ? closeIcon : null
            }
            {title && <ModalHeader> {title} </ModalHeader>}
            <ModalBody>
                {props.children}
            </ModalBody>
            {
                footer &&
                <ModalFooter>
                    {footer}
                </ModalFooter>
            }
        </Modal>
    )
}

export default ModalComponent;

ModalComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    centered: PropTypes.bool,
    footer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
}
