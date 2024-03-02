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
    const apiKey = "be28388a-18a2-46a8-94fa-d8549ebc8517";
    const url = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
    const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8"
    const params = useParams();
    const [videoComments, setVideoComments] = useState([])

    useEffect(() => {
      async function getVideoList() {
        const response = await axios.get(`${url}videos?api_key=${apiKey}`)
        console.log(response.data)
        setVideolist(response.data)     //updating the videolist state using setVideolist
      }
      getVideoList()
    }, [])
    
    async function getSelectedVideo(VideoId) {
      const response = await axios.get(`${url}videos/${VideoId}?api_key=${apiKey}`)
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
          const commentsResponse = await axios.post(`${url}videos/${selectedVideo.id}/comments?api_key=${apiKey}`,comment);
          console.log(commentsResponse)
          setVideoComments([...videoComments, commentsResponse.data])
        } catch (error) {
          console.error("Error posting comment:", error);
        }
    };

    //Delete comment
    async function deleteComment(commentId) {
      try {
        await axios.delete(`${url}videos/${selectedVideo.id}/comments/${commentId}?api_key=${apiKey}`);
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