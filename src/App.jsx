import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import playVideo from "../src/Data/videos.json";
import { useState } from "react";

function App() {

  const [selectedVideo, setSelectedVideo] = useState(playVideo[0]);
  
  return (
    <div className="App">
      <Header />
      <Video selectedVideo={selectedVideo} />
    </div>
  );
}

export default App;