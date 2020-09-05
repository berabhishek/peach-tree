import React from "react";
import FileUploadModal from "../modals/FileUploadModal";

class AddCapital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFileUploadModal: false,
            file: null,
            showFilePreviewModal: false
        }
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
        this.setState({file: uploadedFile})
        this.hideFileUploadModal()
    }
    addCapital() {
        let capitalObj = [];
        debugger;
        let documentType = document.getElementById("documentType");
        let amount = document.getElementById("amount");
        if (documentType.value !== "" && this.state.file && amount.value !== "") {
            capitalObj.push(new Date());
            capitalObj.push(documentType.value)
            capitalObj.push(this.state.file);
            capitalObj.push(amount.value)
            capitalObj.push("Pending Verification");
            amount.value = "";
            this.props.addCapital(capitalObj);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row transition-padding">
                    <div className="col align-mid transition-font">
                            <h3>Upload Document</h3>
                    </div>
                </div>
                    <div className="form-group transition-padding">
                        <select className="form-control" id="documentType">
                            <option value="pancard">Pan Card</option>
                            <option value="aadharcard">Aadhar Card</option>
                            <option value="driverlicense">Driver License</option>
                            <option value="passport">Passport</option>
                            <option value="rentagreement">Rent Agreement</option>
                        </select>
                    </div>
              
                <div className="row transition-padding">
                    <div className="col-12">
                        <input type="number" id="amount" className="full-width align-mid transition-font transition-padding transition-input" placeholder="Amount" required/>
                    </div>
                </div> 
                <div className="row transition-padding">
                    <div className="col-12">
                        <button className="full-width align-mid transition-font transition-padding btn btn-success" onClick={this.showFileUploadModal}>Upload File</button>
                        <FileUploadModal show={this.state.showFileUploadModal} onClose={this.hideFileUploadModal} upload={this.uploadFile}></FileUploadModal>
                    </div>
                </div>
                <div className='row transition-padding'>
                    <div className="col-2"></div>
                    <div className="col-8">
                    <input onClick={this.addCapital.bind(this)} type="submit" className="btn btn-warning full-width align-mid transition-font transition-padding" value="Apply"/>
                    </div>
                    <div className="col-2"></div>
                </div>              
            </div>
        )
    }
}

export default AddCapital;