import "./Videoimage.scss"
function Videoimage(props) {
    return(
        <>
        <div className="videocontainer">
        <video
      className="videocontainer__video"
      poster={props.videoimage.image}
      controls
    ></video>
        </div>
        </>
    )
}

export default Videoimage