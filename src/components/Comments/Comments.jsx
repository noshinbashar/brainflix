
function Comments(props) {
    console.log(props)
    return(
        <>
        <p>Comments</p>
        <ul>
            {props.Comments.comments.map((item) => {
                return(
                    <>
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.comment}</p>
                        {/* <p>{item.likes}</p> */}
                        <p>{item.timestamp}</p>
                    </li>
                    </>
                )
            })}

        </ul>
        </>

    )
}

export default Comments

// "id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
// "name": "Noah Duncan",
// "comment": "Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!",
// "likes": 0,
// "timestamp": 1691731062000

