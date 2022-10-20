import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FornControll";
import {required} from "../../utils/validators/validator";
import style from "../Posts/Post.module.css";
import no_image from "../../uploads/img_546302.png";
import {connect} from "react-redux";
import {getUpdate} from "../../redux/profile-reducer";

const ProfileForm = (props) => {
    return (
        <div>

            <form onSubmit={props.handleSubmit}>
                <div>
                    <img className={style.image} src={no_image} alt="no-image"/>
                </div>
                <div>
                    id <Field component={Input} name={'id'} validate={[required]} defaultValue={ props.profile.id} />
                </div>
                <div>
                    Name <Field component={Input} name={'name'} validate={[required]} placeholder={ props.profile.name} />
                </div>
                <div>
                    Last_name <Field component={Input} name={'last_name'} validate={[required]} placeholder={ props.profile.last_name} />
                </div>
                <div>
                    Email <Field component={Input} name={'email'} validate={[required]} placeholder={ props.profile.email} type={"email"} />
                </div>
                <button>Send</button>
            </form>
        </div>



    )
}
const ProfileReduxForm = reduxForm({form:"profile"})(ProfileForm)
const Profile = (props)=>{
    const onSubmit=(formData)=>{
       props.getUpdate(formData.id,formData.name,formData.last_name,formData.email)
    }
    return (
        <div>
            <ProfileReduxForm onSubmit={onSubmit} profile={props.profile}/>
        </div>
    )
}

export default connect(null,{getUpdate})(Profile);