import "./Videoimage.scss"
function Videoimage({videoimage}) {
    return(

        <>
        <div className="videocontainer">
            <video className="videocontainer__video" poster={videoimage} controls></video>
        </div>
        </>
    )
}

export default Videoimage