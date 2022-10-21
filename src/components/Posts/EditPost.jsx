import {connect} from "react-redux";
import {Field, Fields, reduxForm} from "redux-form";
import {Input} from "../common/FornControll";
import {getUpdatePhoto, getUpdatePost} from "../../redux/posts-reducer";
import style from "./Post.module.css";
import no_image from "../../uploads/img_546302.png";

const EditPostContainerForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <img className={style.image} src={no_image} alt="no-image"/>
            </div>
            <div>ID
                <Field component={Input} name={'id'} defaultValue={props.post.id}/>
            </div>
            <div>Name
                <Field component={Input} name={'name'} placeholder={props.post.name}/>
            </div>
            <div>
                <div>Description</div>
                <Field component={"textarea"} name={'description'} placeholder={props.post.description}/>
            </div>
            <div>
                Price
                <Field component={Input} name={'price'} type={"number"} placeholder={props.post.price}/>
            </div>
            <div>
                Link
                <Field component={Input} name={'links'} type={'links'} placeholder={props.post.links}/>
            </div>
            {/*<div>*/}
            {/*    Photo*/}
            {/*    <Field component={Input} name={'link'} type={'input'} placeholder={props.post.photos}/>*/}
            {/*</div>*/}
            <button>Edit</button>
        </form>
    )
}
const EditPostContainerReduxForm = reduxForm({form: "edit"})(EditPostContainerForm)
const EditPost = (props) => {
    const onSubmit = (formData) => {
        props.getUpdatePost(formData.id, formData.name, formData.description, formData.price, formData.links)
        // props.getUpdatePhoto(formData.id,formData.link)
    }
    return (
        <div>
            <h1>Edit Post:{props.post.name}</h1>
            <EditPostContainerReduxForm onSubmit={onSubmit} post={props.post}/>
        </div>
    )
}


export default connect(null, {getUpdatePost, getUpdatePhoto})(EditPost)