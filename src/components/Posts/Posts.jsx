import style from "./Post.module.css"
import no_image from "../../uploads/img_546302.png"
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Prelader";

const Posts = (props) => {
    let pageCount = Math.ceil(props.totalPostsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <>
            {
                props.posts.length == 0 ? <Preloader/>:null
            }
            <div>
                <NavLink to={'create'}>
                    <span>Create Post</span>
                </NavLink>
                <div>
                    <br/>
                    <div>
                        {pages.map(p => {
                            return <span key={p} className={props.currentPage === p ? style.active:style.item }
                                         onClick={() => {props.onPage(p)}}>{p}</span>})}
                    </div>
                    {
                        props.posts.map(post => <div key={post.id}>
                            <div>
                                <NavLink to={"/post/" + post.id}>
                                    <div>
                                        <img className={style.image} src={no_image} alt="no-image"/>
                                    </div>
                                </NavLink>
                            </div>
                            <div className={style.table}>
                                <div>
                                    <span>Name:{post.name}</span>
                                </div>

                                <div>
                                    <span>Price:{post.price}</span>
                                </div>
                                <div>
                                    <span>Author:{post.user.name}</span>
                                </div>
                                <div>
                                    <NavLink to={'edit-post/' + post.id}>Edit Post</NavLink>
                                </div>
                                <br/>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}
export default Posts