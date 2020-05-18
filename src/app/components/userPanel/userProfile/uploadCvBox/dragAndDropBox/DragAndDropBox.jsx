import React from 'react'

const DragAndDropBox = () => {
    return (
        <div className="display-flex flex-center">
            <div className="uploadCV-uploadFile">
                <div className="uploadFile-box">
                    <i className="fas fa-file-upload"></i>
                </div>
                <div className="uploadFile-text">
                    <p>
                        Drag and Drop or <b>Browse</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DragAndDropBox
