import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FornControll";
import {connect} from "react-redux";
import {getRegisterUser} from "../../redux/user-reducer";
import {Navigate} from "react-router";

const RegisterForm = (props)=>{
   return(
       <form onSubmit={props.handleSubmit}>
           <div>Username
               <Field component={Input} placeholder="Enter username" name={"username"}/>
           </div>
           <div>Password
               <Field component={Input} placeholder="Enter password" name={"password"} />
           </div>
           <div>Name
               <Field component={Input} placeholder="Enter name" name={"name"} />
           </div>
           <div>Last_name
               <Field component={Input} placeholder="Enter last_name" name={"last_name"} />
           </div>
           <div>Email
               <Field component={Input} placeholder="Enter email" name={"email"} />
           </div>
           <div>
               {props.error && <div>
                   {props.error}
               </div>
               }
           </div>
           <button>
               Register
           </button>
       </form>
   )
}

const RegisterReduxForm = reduxForm({form:"register"})(RegisterForm)
const Register = (props)=>{
    const onSubmit=(formData)=>{
      props.getRegisterUser(formData.username,formData.password,formData.name,formData.last_name,formData.email)
    }
    if(props.isAuth){
        return <Navigate to={"/posts"}/>
    }
    return (
        <div>
            <h1>Register</h1>
            <RegisterReduxForm onSubmit={onSubmit}/>

        </div>
    )
}
const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})

export  default  connect(mapStateToProps,{getRegisterUser})(Register)
