import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoData from "../src/Data/video-details.json";
import { useState } from "react";
import NewComment from "./components/Newcomment/Newcomment";
import Comments from "./components/Comments/Comments";
import Videolist from "./components/Videolist/Videolist";

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [comments, setComments] = useState(videoData[0]);
  const [videolist, setVideolist] = useState(videoData);

  function handleVideoClick (id) {
    //  console.log("id: " id);
    const clickedVideo = videolist.find((video) => {
    return video.id === id;
  });
  setSelectedVideo(clickedVideo);

  
  }
  
  return (
    <div className="App">
      <Header />
      <Video selectedVideo={selectedVideo} />
      <NewComment />
      <Comments Comments={comments}/>
      <Videolist Videolist={videolist} 
      clickedVideo={handleVideoClick}
      selectedVideo={selectedVideo}/>
      
    </div>
  );
}

export default App;


 
