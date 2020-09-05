import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/actions';
import FileUploaModal from './modals/FileUploadModal';
import FilePreviewModal from './modals/FilePreviewModal';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFileUploadModal: false,
            file: null,
            showFilePreviewModal: false
        }
    }
    componentDidMount = () => {
        const user = {
            name: 'Abhishek'
        }
        this.props.setUser(user)
    }
    showFileUploadModal = () => {
        this.setState({showFileUploadModal: true})
    }
    hideFileUploadModal = () => {
        this.setState({showFileUploadModal: false})
    }
    showFilePreviewModal = () => {
        this.setState({showFilePreviewModal: true})
    }
    hideFilePreviewModal = () => {
        this.setState({showFilePreviewModal: false})
    }
    uploadFile = uploadedFile => {
        console.log('uploaded file::: ', uploadedFile)
        this.setState({file: uploadedFile})
        this.hideFileUploadModal()
    }
    render() {
        return (
            <div>
                <span>Hello world component</span>
                <button  onClick={this.showFileUploadModal}>show file upload Modal </button>
                <FileUploaModal show={this.state.showFileUploadModal} onClose={this.hideFileUploadModal} upload={this.uploadFile}></FileUploaModal>
                <button  onClick={this.showFilePreviewModal}>show preview Modal </button>
                <FilePreviewModal show={this.state.showFilePreviewModal} file={this.state.file} onClose={this.hideFilePreviewModal}></FilePreviewModal>
            </div> 
        );
    }    
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    setUser: userObj => {
        dispatch(setUser(userObj))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);