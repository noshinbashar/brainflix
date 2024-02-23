import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoData from "../src/Data/video-details.json";
import { useState } from "react";

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  // const [selectedTitle, setSelectedTitle] = useState(videoData[0]);
  
  return (
    <div className="App">
      <Header />
      <Video selectedVideo={selectedVideo} />
    </div>
  );
}

export default App;