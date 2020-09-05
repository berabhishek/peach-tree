import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/actions';
import FileUploaModal from './modals/FileUploadModal';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFileUploadModal: false,
            file: null
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