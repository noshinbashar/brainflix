import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoData from "../src/Data/video-details.json";
import { useState } from "react";
import NewComment from "./components/Newcomment/Newcomment";
import Comments from "./components/Comments/Comments";
import Videolist from "./components/Videolist/Videolist";
import Videoimage from "./components/Videoimage/Videoimage";

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [comments, setComments] = useState(videoData[0]);
  const [videolist, setVideolist] = useState(videoData);
  const [videoimage, setVideoimage] = useState(videoData[0])

  function handleVideoClick(id) {
    const clickedVideo = videolist.find((video) => {
    return video.id === id;
  });
  setSelectedVideo(clickedVideo);
  setComments(clickedVideo); 
  setVideoimage(clickedVideo);
  }
  
  return (
    <div className="App">
      <Header />
      <Videoimage videoimage={videoimage}/>

      <div className="mainpage">

      <div className="itemone">
      <Video selectedVideo={selectedVideo} />
      <NewComment />
      <Comments Comments={comments}/>
      </div>

      <div className="itemtwo">
      <Videolist Videolist={videolist} 
      clickedVideo={handleVideoClick}
      selectedVideo={selectedVideo}/>
      </div>

      </div>
      
    </div>
  );
}

export default App;


 
