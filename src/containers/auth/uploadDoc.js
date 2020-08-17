import React, { Component } from 'react';
//import axios from 'axios';

class UploadDoc extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const formData = new FormData()
        formData.append(
            "myFile",
            this.state.selectedFile
        )
        //axios.post("api/uploadfile", formData);
    };

    render() {

        return (
            <div className="upload_document_file" onClick={this.onFileUpload}>
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="56" viewBox="0 0 81 56">
                    <g id="Group_1341" data-name="Group 1341" transform="translate(-641 -735)">
                        <g id="Rectangle_20" data-name="Rectangle 20" transform="translate(641 735)" fill="#f8f8f8" stroke="#bfbfbf" stroke-width="1">
                            <path d="M5,0H81a0,0,0,0,1,0,0V56a0,0,0,0,1,0,0H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" stroke="none" />
                            <path d="M5,.5H80a.5.5,0,0,1,.5.5V55a.5.5,0,0,1-.5.5H5A4.5,4.5,0,0,1,.5,51V5A4.5,4.5,0,0,1,5,.5Z" fill="none" />
                        </g>
                        <path id="Icon_ionic-md-add" data-name="Icon ionic-md-add" d="M29.25,19.5H19.5v9.75h-3V19.5H6.75v-3H16.5V6.75h3V16.5h9.75Z" transform="translate(699.438 744.805) rotate(90)" fill="#292929" />
                    </g>
                </svg>
                <label className="upload_document" for="inputGroupFile03">UPLOAD DOCUMENT</label>
                <input type="file"
                    className="custom-file-input"
                    id="inputGroupFile03"
                    onChange={this.onFileChange} required />
            </div>
        );
    }
}

export default UploadDoc;
