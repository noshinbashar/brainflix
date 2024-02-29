import "./Videolist.scss"

function Videolist({Videolist}) {
    return(
        <>
        <div className="videos">
        <p className="title">NEXT VIDEOS</p>
        <ul className="videolist">
            {Videolist
            // .filter((videos) => (videos.id) !== props.selectedVideo.id) 
            .map((videos) => {
                return (
                    <li className="videolist__item" >
                    <p><img className="videolist__videos" src={videos.image} alt="Video List"></img></p>
                    <div className="videolist__info">
                    <p className="videolist__title">{videos.title}</p>
                    <p className="videolist__channel">{videos.channel}</p> 
                    </div>   
                </li>         
                )
               
            })}
        </ul>
        </div>
        </>
    )
}

export default Videolist
