import "./Videolist.scss"

function Videolist(props) {
    console.log(props)
    return(
        <>
        <p>NEXT VIDEOS</p>
        <ul>
            {props.Videolist
            .filter((videos) => (videos.id) !== props.selectedVideo.id) 
            .map((videos) => {
                return (
                    <li onClick={props.clickedVideo(videos.id)} key={videos.id}>
                    <p><img className="videos" src={videos.image} alt="Video List"></img></p>
                    <p>{videos.title}</p>
                    <p>{videos.channel}</p>    
                </li>         
                )
               
            })}
        </ul>
        </>
    )
}

export default Videolist
