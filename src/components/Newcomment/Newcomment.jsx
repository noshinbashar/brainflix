import "./Newcomment.scss"
import CommentImage from "../../assets/Images/add_comment.svg"
import Icon from "./../../assets/Images/Mohan-muruge.jpg"
import { useState } from "react"

function NewComment({selectedVideo, postComment}) {
    const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = async (e) => {
    console.log(newComment)
    e.preventDefault();
    const Comment = {
        name: "Mohan",
        comment: newComment
    }
    postComment(Comment) 
    setNewComment(""); 

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