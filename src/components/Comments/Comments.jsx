import "./Comments.scss"

function Comments(props) {

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = date.getDate() + 1;
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
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
                        <p className="list__name">{item.name}</p>
                        <p className="list__comment">{item.comment}</p>
                        {/* <p>{item.likes}</p> */}
                        <p className="list__time">{formatDate(item.timestamp)}</p>
                        <p className="list__image"></p>
                    </li>
                )
            })}

        </ul>
        </div>
        </>

    )
}

export default Comments


