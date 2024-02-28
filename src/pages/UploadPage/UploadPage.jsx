import "./UploadPage.scss"
import Preview from "../../assets/Images/Upload-video-preview.jpg"
import Publish from "../../assets/Images/publish.svg"

function UploadPage () {
    return (
        <>
        <div className="preview">
                <h1 className="preview-title">Upload Video</h1>
        <div className="upload-video-container">

            <div className="preview-imagebox"> 
                <p className="preview-text">VIDEO THUMBNAIL</p>
                <img className="preview-image" src={Preview} alt="PreviewImage" ></img>
            </div>

            <div>
                <p className="preview-text">TITLE YOUR VIDEO</p>
                <div className="preview-boxone">
                <input className="preview-input" type="text" placeholder="Add a title to your video"/>
                </div>
          
                <p className="preview-text">ADD A VIDEO DESCRIPTION</p>
                <div className="preview-boxtwo">
                <input className="preview-input" type="text" placeholder="Add a description to your video"/>
                </div>
            </div>
        </div>
            
        <div className="button-container">
            <div className="preview-button">
                <button className="preview-button__text">PUBLISH</button>
                <img className="preview-button__icon" src={Publish} alt="Publish" ></img>
            </div>

            <div>
                <p className="preview-button__cancel">CANCEL</p>
            </div>
        </div>


        </div>
        </>
    )
}

export default UploadPage