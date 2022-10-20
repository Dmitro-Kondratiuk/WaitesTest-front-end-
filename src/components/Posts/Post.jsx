import style from "./Post.module.css"
import Preloader from "../common/Preloader/Prelader";
import no_image from "../../uploads/img_546302.png";

const  Post=(props)=>{
    if (!props.post){
        return <Preloader />
    }


    return (
        <div>
            <div>
                <img className={style.image} src={no_image} alt="no-image"/>
            </div>
            <div>
                <span>Title: {props.post.name}</span>
            </div>
            <div>
                <span>Description: {props.post.description}</span>
            </div>
            <div>
                <span>Price: {props.post.price}$</span>
            </div>
            <div>
                <span>Author: {props.author}</span>
            </div>
        </div>
    )
}
export default Post