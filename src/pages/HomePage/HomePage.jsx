import Video from "../../components/Video/Video";
// import videoData from "../../Data/video-details.json";  
import { useState, useEffect } from "react";
import NewComment from "../../components/Newcomment/Newcomment";
import Comments from "../../components/Comments/Comments";
import Videolist from "../../components/Videolist/Videolist";
import Videoimage from "../../components/Videoimage/Videoimage";
import axios from "axios"

function HomePage () {
    const [selectedVideo, setSelectedVideo] = useState([]);
    const [comments, setComments] = useState([]);
    const [videolist, setVideolist] = useState([]);
    const [videoimage, setVideoimage] = useState([]);
    const apiKey = "be28388a-18a2-46a8-94fa-d8549ebc8517";
    const url = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

    useEffect(() => {
      async function getVideoList() {
        const response = await axios.get(`${url}videos?api_key=${apiKey}`)
        console.log(response.data)
        setVideolist(response.data)
      }
      getVideoList()
    }, [])


    // function handleVideoClick(id) {
    //   const clickedVideo = videolist.find((video) => {
    //   return video.id === id;
    // });
    // setSelectedVideo(clickedVideo);
    // setComments(clickedVideo); 
    // setVideoimage(clickedVideo);
    // }

    return(
        <>
        <div className="App">
      <Videoimage videoimage={videoimage}/>

      <div className="mainpage">

      <div className="itemone">
      {/* <Video selectedVideo={selectedVideo} /> */}
      <NewComment />
      {/* <Comments Comments={comments}/> */}
      </div>

      <div className="itemtwo">
      <Videolist Videolist={videolist} 
      // selectedVideo={selectedVideo}
      />
      </div>

      </div>
      
    </div>
        </>
    )
}

export default HomePage