import {userAPI} from "../api/user-api";
import {stopSubmit} from "redux-form";

const SET_USERS = "SET_USERS"
const SHOW_PRELOADER = 'SHOW_PRELOADER'

let initial = {
    users : [],
    isFetching :false,
}

const userReducer = (state =initial,action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,users: action.users
            }
        case SHOW_PRELOADER :
            return {
                ...state,isFetching:action.isFetching
            }

        default:
            return state
    }
}
export const setUsers =(users) => ({type:SET_USERS,users})
export const showPreloader=(isFetching)=>({type:SHOW_PRELOADER,isFetching})
export const  getUser=()=>{
    return (dispatch)=>{
        dispatch(showPreloader(true))
        userAPI.getUsers().then(data=>{
            dispatch(setUsers(data.items))
            dispatch(showPreloader(false))
        });
    }


}
export const getRegisterUser=(username,password,name,last_name,email)=>{
    return (dispatch)=>{
        userAPI.getRegister(username,password,name,last_name,email).then(response=>{
            if(response.data.resultCode ===0){
                return response.data
            }else{
                let message = response.data.error
                dispatch(stopSubmit("register",{_error:message}))
            }

        })
    }
}
export default userReducer