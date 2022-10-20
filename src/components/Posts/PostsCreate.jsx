import style from "./Post.module.css";
import no_image from "../../uploads/img_546302.png";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FornControll";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {getCreatePost} from "../../redux/posts-reducer";

const  PostsCreateForm=(props)=>{
    console.log(props.id)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <img className={style.image} src={no_image} alt="no-image"/>
            </div>
            <div>
                Name <Field component={Input} name={'name'} validate={[required]}  />
            </div>
            <div>
                description <Field component={Input} name={'description'} validate={[required]} />
            </div>
            <div>
                price <Field component={Input} name={'price'} validate={[required]} type={'number'}/>
            </div>
            <div>
                links <Field component={Input} name={'links'} validate={[required]} />
            </div>
            <button>Send</button>
        </form>
    )
}
const PostsCreateReduxForm = reduxForm({form:"post_create"})(PostsCreateForm)

const PostsCreate = (props)=>{
    const onSubmit=(formData)=>{
            props.getCreatePost(formData.name,formData.description,formData.price,formData.links)
    }
    return (
        <div>
            <h1>Create Post</h1>
            <PostsCreateReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default connect(null,{getCreatePost})(PostsCreate);