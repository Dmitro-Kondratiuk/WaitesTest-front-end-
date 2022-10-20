import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {Input} from "../common/FornControll";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {NavLink } from "react-router-dom";
import {Navigate } from "react-router";

const LoginForm = (props) =>{

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                     <Field component={Input} placeholder={'Enter username'} name={'username'} validate={[required]}/>
                </div>
                <div>
                     <Field  component={Input} placeholder={'Enter password'} name={'password'} type={'password'} validate={[required]}/>
                </div>
                <div>
                    {props.error && <div>
                        {props.error}
                    </div>
                    }
                </div>
                <button>Login</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form:"login"})(LoginForm)
const Login = (props)=>{
    const onSubmit=(formData)=>{
       props.login(formData.username,formData.password)

    }

    if(props.isAuth){
        return <Navigate to={"/posts"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <div>
                <NavLink to={"register"}>
                    <div>Register</div>
                </NavLink>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})

export  default connect(mapStateToProps,{login})(Login);