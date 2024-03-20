import "./UploadPage.scss"
import Preview from "../../assets/Images/Upload-video-preview.jpg"
import Publish from "../../assets/Images/publish.svg"
import { Link, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UploadPage() {
    const [published, setPublished] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        document.title = "Upload";
    }, []);

    const onImageChange = (event) => {
        console.log("show me the image")
    }

    const handlePublish = (event) => {
        event.preventDefault();
        let newTitle = event.target.title.value;
        let newDescription = event.target.description.value;

        const upload = { title: newTitle, description: newDescription }
        console.log(upload)

        // axios.post("http://localhost:8080/videos", {
        //     title: newTitle,
        //     description: newDescription
        // })
        //     .then(response => {
        //         setPublished(true);
        //         setTimeout(() => {
        //             setRedirect(true);
        //         }, 1000);
        //     });
    }

    return (
        <>
            <div className="preview">
                <h1 className="preview-title">Upload Video</h1>

                <form className="upload__form" onSubmit={handlePublish} encType="multipart/form-data">
                    {/* <input type="file" name="image" accept="image/*" /> */}
                    <div className="upload-video-container">

                        <div className="preview-imagebox">
                            <p className="preview-text">VIDEO THUMBNAIL</p>
                            <img className="preview-image" src={Preview} alt="PreviewImage" ></img>
                        </div>

                        <div className="preview-boxs">
                            <p className="preview-text">TITLE YOUR VIDEO</p>
                            <div className="preview-boxone">
                                <input className="preview-input" type="text" placeholder="Add a title to your video" name="title" />
                            </div>

                            <p className="preview-text">ADD A VIDEO DESCRIPTION</p>
                            <div className="preview-boxtwo">
                                <input className="preview-input" type="text" placeholder="Add a description to your video" name="description" />
                            </div>
                        </div>

                        {/* <input type="file" multiple name="image" accept="image/*" onChange={onImageChange} /> */}

                    </div>

                    <div className="button-container">

                        <div className="preview-button">
                            <button type="submit" className="preview-button__text">
                                {published ? "Success" : "Publish"}
                            </button>
                            {redirect && <Navigate to='/' />}
                            <img className="preview-button__icon" src={Publish} alt="Publish" />
                        </div>

                        <Link to={"/"} className="link">
                            <p className="preview-button__cancel">CANCEL</p>
                        </Link>
                    </div>

                </form>
            </div>
        </>
    )
}

export default UploadPage