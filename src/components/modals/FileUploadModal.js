import React from 'react';
import PropTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from '../FileUpload';

class FilUploadModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
    }

    uploadFile = file => {
        console.log(file);
        this.setState({
          files: file.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        });
    };

    componentWillUnmount() {
        // Make sure to revoke the data uris to avoid memory leaks
        this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
    }

    render() {
        if(!this.props.show) {
            return null
        }
        console.log(this.props)
        return (
            <Modal
                {...this.props}
                size="lg"
                centered
                >
                <Modal.Body>
                    <FileUpload uploadFile={this.uploadFile} files={this.state.files}></FileUpload>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

FilUploadModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};  

export default FilUploadModal;