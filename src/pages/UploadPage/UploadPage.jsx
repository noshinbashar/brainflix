import "./UploadPage.scss"
import Preview from "../../assets/Images/Upload-video-preview.jpg"

function UploadPage () {
    return (
        <>
        <div className="preview">
        <h1 className="preview-title">Upload Video</h1>
        <img className="preview-image" src={Preview} alt="PreviewImage" ></img>
        </div>
        </>
    )
}

export default UploadPage