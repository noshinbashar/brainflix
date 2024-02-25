import "./Comments.scss"

function Comments(props) {

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }


    console.log(props)
    return(
        <>
        <div className="comments">
        <ul className="comments__box">
            {props.Comments.comments.map((item) => {
                return(

                    <li className="list" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.comment}</p>
                        {/* <p>{item.likes}</p> */}
                        <p>{formatDate(item.timestamp)}</p>
                    </li>
                )
            })}

        </ul>
        </div>
        </>

    )
}

export default Comments


