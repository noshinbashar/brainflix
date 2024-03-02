import "./Newcomment.scss"
import CommentImage from "../../assets/Images/add_comment.svg"
import Icon from "./../../assets/Images/Mohan-muruge.jpg"
import { useState } from "react"
import axios from "axios"

function NewComment({selectedVideo, postComment}) {
    const apiKey = "be28388a-18a2-46a8-94fa-d8549ebc8517";
    const url = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
    const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = async (e) => {
    console.log(newComment)
    e.preventDefault();
    const Comment = {
        name: "Mohan",
        comment: newComment
    }
    postComment(Comment) 
    setNewComment(""); // Clear input field after successful comment post

  };
    return(
        <>
        <div className="container">

        <p className="text">{selectedVideo.comments?.length} Comments</p>

        <form onSubmit={handleCommentSubmit} className="commentBox">
            <div>
            <p className="commentBox__text">JOIN THE CONVERSATION</p>
            <p className="commentBox__input"><input className="commentBox__input--text" type="text" placeholder="Add a new comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            /></p>
            </div>

            <div>
            <p className="commentBox__btn">
                <button type="submit" className="button__text">COMMENT</button>
                <img className="button__image" src={CommentImage} alt="Comment" ></img>
            </p>
            </div>
            
            <img className="commentBox__image" src={Icon} alt="Icon" ></img> 
            
        </form>

        </div>
        </>
    )
}

export default NewComment 