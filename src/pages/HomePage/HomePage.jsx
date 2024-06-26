import "./HomePage.scss"
import Video from "../../components/Video/Video";
import { useState, useEffect } from "react";
import NewComment from "../../components/Newcomment/Newcomment";
import Comments from "../../components/Comments/Comments";
import Videolist from "../../components/Videolist/Videolist";
import Videoimage from "../../components/Videoimage/Videoimage";
import axios from "axios"
import { useParams } from "react-router-dom";


function HomePage () {
    const [selectedVideo, setSelectedVideo] = useState([]);
    const [videolist, setVideolist] = useState([]);
    const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8"
    const params = useParams();
    const [videoComments, setVideoComments] = useState([])
    const imageURL = process.env.backendURL;

    console.log(imageURL)

    useEffect(() => {
      async function getVideoList() {
        const response = await axios.get("http://localhost:8080/videos")
        console.log(response.data)
        setVideolist(response.data)     //updating the videolist state using setVideolist
      }
      getVideoList()
    }, [])
    
    async function getSelectedVideo(VideoId) {
      const response = await axios.get(`http://localhost:8080/videos/${VideoId}`)
      console.log(response.data)
      setSelectedVideo(response.data)  //updating the selectedvideo state using setSelectedVideo  
      setVideoComments(response.data.comments)
    }

    useEffect(() => {
      if (params.id) {
        console.log(params.id); // this is coming from the url for the route /:id 
        getSelectedVideo(params.id);
      } else {
        getSelectedVideo(defaultVideoId);
      }
    }, [params]);

     //Post comment
     const postComment = async (comment) => { 
      console.log(comment) 
      try {
          const commentsResponse = await axios.post(`http://localhost:8080/videos/${selectedVideo.id}/comments`,comment);
          console.log(commentsResponse)
          setVideoComments([...videoComments, commentsResponse.data])
        } catch (error) {
          console.error("Error posting comment:", error);
        }
    };

    //Delete comment
    async function deleteComment(commentId) {
      try {
        await axios.delete(`http://localhost:8080/videos/${selectedVideo.id}/comments/${commentId}`);
        setVideoComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
        console.log("Comment deleted successfully.");
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    }
    

    return(
        <>
        <div className="App">

            <Videoimage videoimage={selectedVideo.image}/>

            <div className="mainpage">
                <div className="itemone">
                    <Video selectedVideo={selectedVideo} />
                    <NewComment selectedVideo={selectedVideo} postComment={postComment} />
                    <Comments Comments={videoComments} deleteComment={deleteComment} />
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