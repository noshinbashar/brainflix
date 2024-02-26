import "./Newcomment.scss"
import CommentImage from "../../assets/Images/add_comment.svg"
import Icon from "./../../assets/Images/Mohan-muruge.jpg"

function NewComment() {
    return(
        <>
        <div className="container">

        <p className="text">3 Comments</p>

        <div className="commentBox">
            <div>
            <p className="commentBox__text">JOIN THE CONVERSATION</p>
            <p className="commentBox__input"><input className="commentBox__input--text" type="text" placeholder="Add a new comment"/></p>
            </div>

            <div>
            <p className="commentBox__btn">
                <button className="button__text">COMMENT</button>
                <img className="button__image" src={CommentImage} alt="Comment" ></img>
            </p>
            </div>
            
            <img className="commentBox__image" src={Icon} alt="Icon" ></img> 
            
        </div>
        </div>
        </>
    )
}

export default NewComment 