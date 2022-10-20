import {authAPI} from "../api/auth-api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"

const initial = {
    id : null,
    name : null,
    last_name : null,
    isAuth: false
}

const authReducer =(state=initial,action)=>{
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data
            }
        default:
            return state

    }
}

export const setUserData = (id,name,last_name,isAuth)=>({type:SET_USER_DATA,data:{id,name,last_name,isAuth}})

export const autologin=()=>(dispatch)=>{
    return authAPI.me().then(response =>{
            let {id,name,last_name} = response.data
            dispatch(setUserData(id,name,last_name,true))
    })
}
export const login=(username,password)=>(dispatch)=>{
      authAPI.login(username,password).then(response=>{
        if(response.data.resultCode ===0){
            localStorage.setItem('access_token',response.data.access_token )
            dispatch(autologin())
        }else{
            let messages = response.data.error.length >0 ? response.data.error : "Some error"
            dispatch(stopSubmit("login",{_error:messages}))
        }
    })
}
export const logout = ()=>(dispatch)=>{
    authAPI.logout().then(response =>{
        localStorage.setItem('access_token','' )
        dispatch(setUserData(null,null,null,false))
    })
}

export default authReducer