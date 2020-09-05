import React from "react";
import '../styles/fileupload.css';

class FileUpload extends React.Component {
    constructor(props) {
        super(props)
        this.readFile = this.readFile.bind(this)
    }

    readFile(e) {
        const selectedFile = e.target.files[0]
        const reader = new FileReader()
        const fileData = {
            name: selectedFile.name,
            imgData: ''
        }
        reader.onloadend = () => {
            fileData.imgData = reader.result
            this.props.updateFile(fileData)
        };
        reader.readAsDataURL(selectedFile)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" multiple="" onChange={this.readFile} accept="image/x-png,image/gif,image/jpeg"/>
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default FileUpload;
