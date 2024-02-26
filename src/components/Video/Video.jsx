import "./Video.scss";
import Likes from "../../assets/Images/likes.svg"
import Views from "../../assets/Images/views.svg"

function Video(props) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };

    return(
      <>
    
      <div className="videoName">
        <h1>{props.selectedVideo.title}</h1>
      </div>

      <div className="data">
        
        <div className="data__item">
        <p className="data__channel">By {props.selectedVideo.channel}</p>
        <p className="data__date">{formatDate(props.selectedVideo.timestamp)}</p>
        </div>

        <div className="data__item">
        <p className="data__item__icons"> <img className="data__item--views" src={Views} alt="Views"></img> {props.selectedVideo.views}</p>
        <p className="data__item__icons"> <img className="data__item--likes" src={Likes} alt="Likes"></img> {props.selectedVideo.likes}</p>
        </div>

      </div>

      <div className="description">
      <p>{props.selectedVideo.description}</p>
      </div>


      </>
    )
}

export default Video
