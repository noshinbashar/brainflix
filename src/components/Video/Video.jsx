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
        <video
      className="video"
      poster={props.selectedVideo.image}
      controls
    ></video>

      <div className="title">
        <h1>{props.selectedVideo.title}</h1>
      </div>

      <div className="data">
        <p className="data__item--channel">By {props.selectedVideo.channel}</p>
        <p className="data__item"> <img className="data__item--views" src={Views} alt="Views"></img> {props.selectedVideo.views}</p>
        <p className="data__item">{formatDate(props.selectedVideo.timestamp)}</p>
        <p className="data__item"> <img className="data__item--likes" src={Likes} alt="Likes"></img> {props.selectedVideo.likes}</p>
      </div>

      <div className="description">
      <p>{props.selectedVideo.description}</p>
      </div>


      </>
    )
}

export default Video

{/* "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
      "title": "The Future of Artificial Intelligence",
      "channel": "Aiden Thompson",
      "image": "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg",
      "description": "Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.",
      "views": "980,544",
      "likes": "22,479",
      "duration": "4:01",
      "video": "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
      "timestamp": 1691471862000,
      "comments":  */}