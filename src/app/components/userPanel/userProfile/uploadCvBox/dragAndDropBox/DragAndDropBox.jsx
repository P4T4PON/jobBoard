import React from 'react'

const DragAndDropBox = () => {
    return (
        <div className="display-flex flexCenter">
            <div className="uploadCV-uploadFile">
                <div className="uploadFileBox">
                    <i className="fas fa-file-upload"></i>
                </div>
                <div className="uploadFileText">
                    <p>
                        Drag and Drop or <b>Browse</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DragAndDropBox
