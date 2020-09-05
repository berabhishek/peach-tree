import React from "react";
// import Dropzone from "react-dropzone";
import '../styles/fileupload.css';

class FileUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            warningMsg: ""
        }
    }
    
    onDrop = (accepted, rejected) => {
        if (Object.keys(rejected).length !== 0) {
        const message = "Please submit valid file type";
        this.setState({ warningMsg: message });
        } else {
        this.props.uploadFile(accepted);
        this.setState({ warningMsg: "" });
        console.log(accepted[0].preview);

        var blobPromise = new Promise((resolve, reject) => {
            const reader = new window.FileReader();
            reader.readAsDataURL(accepted[0]);
            reader.onloadend = () => {
            const base64data = reader.result;
            resolve(base64data);
            };
        });
        blobPromise.then(value => {
            // console.log(value);
        });
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form method="post" action="#" id="#">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" multiple="" />
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default FileUpload;
