import "./Videoimage.scss"
function Videoimage({videoimage}) {

    console.log(`${process.env.backendURL}/${videoimage}`)
    return(

        <>
        <div className="videocontainer">
            <video className="videocontainer__video" poster={`${videoimage}`} controls></video>
        </div>
        </>
    )
}

export default Videoimage