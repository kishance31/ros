import React, { Component } from 'react';
import axios from 'axios';
import {UploadPlusIcon} from '../../components/icons/Icons';

class UploadDoc extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });

    };

    onFileUpload = () => {

        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile
        );
        //axios.post("api/uploadfile", formData);
    };

    render() {

        return (
            <div className="upload_document_file">
                <UploadPlusIcon />
                <label onClick={this.onFileUpload}
                       className="upload_document" htmlFor="inputGroupFile03">UPLOAD DOCUMENT</label>
                <input type="file"
                    className="custom-file-input"
                    id="inputGroupFile03"
                    onChange={this.onFileChange} />
            </div>

        );
    }
} 

export default UploadDoc;