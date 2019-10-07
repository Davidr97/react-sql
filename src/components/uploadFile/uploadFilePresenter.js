import React from 'react';
import SuccessfulMessage from "./successfulMessage";
import ErrorMessage from "./errorMessage";
import {FileUpload} from 'primereact/fileupload';


const uploadFilePresenter = ({onUpload,onError,uploaded,state,options}) => {

    let messagesHtml = null;
    if(uploaded) {
        if (state) {
            messagesHtml = (
                <SuccessfulMessage/>
            )
        } else {
            messagesHtml = (
                <ErrorMessage/>
            )
        }
    }

    return <div>
        <FileUpload onUpload={onUpload} onError={onError} {...options}/>
        {messagesHtml}
    </div>
};

export default uploadFilePresenter;