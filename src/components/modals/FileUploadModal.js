import React from 'react';
import PropTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from '../FileUpload';

class FilUploadModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
    }

    updateFile = fileToUpload => {
        this.setState({file: fileToUpload})
    }

    uploadFile = () => {
        if (this.state.file) {
            this.props.upload(this.state.file)
        }
    }

    closeModal = () => {
        this.setState({file: null})
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
                <Modal.Body>
                    <FileUpload updateFile={this.updateFile}></FileUpload>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={this.uploadFile}>Upload</Button>
                    <Button onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

FilUploadModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    upload: PropTypes.func.isRequired
};  

export default FilUploadModal;