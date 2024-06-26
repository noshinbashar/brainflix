import { Link } from "react-router-dom"
import "./Videolist.scss"

function Videolist({Videolist, selectedVideo}) {
    return(
        <>
        <div className="videos">
        <p className="title">NEXT VIDEOS</p>
        <ul className="videolist">
            {Videolist
            .filter((videos) => (videos.id) !==selectedVideo.id) 
            .map((videos) => {
                return (
                    <Link to={`/${videos.id}`} className="link">    {/* adding this className to remove text decoration  */}
                    <li className="videolist__item" >
                    <p><img className="videolist__videos" src={`${videos.image}`} alt="Video List"></img></p>
                    <div className="videolist__info">
                    <p className="videolist__title">{videos.title}</p>
                    <p className="videolist__channel">{videos.channel}</p> 
                    </div>   
                </li> 
                </Link>        
                )
               
            })}
        </ul>
        </div>
        </>
    )
}

export default Videolist
