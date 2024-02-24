import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoData from "../src/Data/video-details.json";
import { useState } from "react";
import NewComment from "./components/Newcomment/Newcomment";
import Comments from "./components/Comments/Comments";

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [comments, setComments] = useState(videoData[0]);
  
  return (
    <div className="App">
      <Header />
      <Video selectedVideo={selectedVideo} />
      <NewComment />
      <Comments Comments={comments}/>
      
    </div>
  );
}

export default App;