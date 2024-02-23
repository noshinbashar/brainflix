import "./Video.scss";

function Video(props) {
    return(
        <video
      className="video"
      poster={props.selectedVideo.image}
      controls
    ></video>
     
    )
}

export default Video

// import "./Video.scss";
// function Video(props) {
//   // console.log("video props: ", props.selectedAnimal);

//   return (
//     <video
//       className="video"
//       poster={props.selectedAnimal.image}
//       controls
//     ></video>
//   );
// }

// export default Video;