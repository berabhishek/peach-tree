import React from 'react';
import PropTypes from "prop-types";
import { Modal, Button, Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class FilePreviewModal extends React.Component {
    
    closeModal = () => {
        this.props.onClose()
    }

    render() {
        if(!this.props.show) {
            return null
        }
        return (
            <Modal
                {...this.props}
                size="lg"
                centered
                >
                <Modal.Header>
                    {this.props.file.name}
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.file.imgData} fluid />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

FilePreviewModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    file: PropTypes.object.isRequired
};  

export default FilePreviewModal;