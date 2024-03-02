import Video from "../../components/Video/Video";
import { useState, useEffect } from "react";
import NewComment from "../../components/Newcomment/Newcomment";
import Comments from "../../components/Comments/Comments";
import Videolist from "../../components/Videolist/Videolist";
import Videoimage from "../../components/Videoimage/Videoimage";
import axios from "axios"
import { Link, useParams } from "react-router-dom";

function HomePage () {
    const [selectedVideo, setSelectedVideo] = useState([]);
    const [videolist, setVideolist] = useState([]);
    const apiKey = "be28388a-18a2-46a8-94fa-d8549ebc8517";
    const url = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
    const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8"
    const params = useParams();

    useEffect(() => {
      async function getVideoList() {
        const response = await axios.get(`${url}videos?api_key=${apiKey}`)
        console.log(response.data)
        setVideolist(response.data)     //updating the videolist state using setVideolist
      }
      getVideoList()
    }, [])

    const updateVideo = async (videoId) => {
      const response = await axios.get(`${url}videos/${videoId}?api_key=${apiKey}`);
      setSelectedVideo(response.data);
    };

    useEffect(() => {
      async function getSelectedVideo(VideoId) {
        const response = await axios.get(`${url}videos/${VideoId}?api_key=${apiKey}`)
        console.log(response.data)
        setSelectedVideo(response.data)  //updating the selectedvideo state using setSelectedVideo    
      }
      if (params.id) {
        console.log(params.id); // this is coming from the url for the route /:id 
        getSelectedVideo(params.id);
      } else {
        getSelectedVideo(defaultVideoId);
      }
    }, [params]);

    return(
        <>
        <div className="App">

            <Videoimage videoimage={selectedVideo.image}/>

            <div className="mainpage">
                <div className="itemone">
                    <Video selectedVideo={selectedVideo} />
                    <NewComment selectedVideo={selectedVideo} updateVideo={updateVideo} />
                    <Comments Comments={selectedVideo.comments} updateVideo={updateVideo} />
                </div>

                <div className="itemtwo">
                    <Videolist Videolist={videolist} 
                    selectedVideo={selectedVideo} />
                </div>
            </div>

        </div>
        </>
    )
}

export default HomePage