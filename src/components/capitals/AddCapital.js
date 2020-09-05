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
                <div className="row transaction-padding">
                    <div className="col align-mid transaction-font">
                            <h3>Upload Document</h3>
                    </div>
                </div>
                    <div className="form-group transaction-padding">
                        <select className="form-control" id="documentType">
                            <option value="Pan Card">Pan Card</option>
                            <option value="Aadhar Card">Aadhar Card</option>
                            <option value="Driver License">Driver License</option>
                            <option value="Passport">Passport</option>
                            <option value="Rent Agreement">Rent Agreement</option>
                        </select>
                    </div>
              
                <div className="row transaction-padding">
                    <div className="col-12">
                        <input type="number" id="amount" className="full-width align-mid transaction-font transaction-padding transaction-input" placeholder="Amount" required/>
                    </div>
                </div> 
                <div className="row transaction-padding">
                    <div className="col-12">
                        <button className="full-width align-mid transaction-font transaction-padding btn btn-success" onClick={this.showFileUploadModal}>Upload File</button>
                        <FileUploadModal show={this.state.showFileUploadModal} onClose={this.hideFileUploadModal} upload={this.uploadFile}></FileUploadModal>
                    </div>
                </div>
                <div className='row transaction-padding'>
                    <div className="col-2"></div>
                    <div className="col-8">
                    <input onClick={this.addCapital.bind(this)} type="submit" className="btn btn-warning full-width align-mid transaction-font transaction-padding" value="Apply"/>
                    </div>
                    <div className="col-2"></div>
                </div>              
            </div>
        )
    }
}

export default AddCapital;