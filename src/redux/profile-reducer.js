import {profileAPI} from "../api/profile-api";

const SET_PROFILE="SET_PROFILE"
const SHOW_PRELOADER = 'SHOW_PRELOADER'


let initial ={
    profile: [],
    isFetching :false,

}

const  profileReducer =(state=initial,action)=>{
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,profile: action.profile
            }
        case SHOW_PRELOADER :
            return {
                ...state,isFetching:action.isFetching
            }

        default:
            return state
    }
}
const  setProfile=(profile)=>({type:SET_PROFILE,profile})
export const showPreloader=(isFetching)=>({type:SHOW_PRELOADER,isFetching})

export const getProfile=(id)=>{
    return (dispatch=>{
        dispatch(showPreloader(true))
        profileAPI.getProfile(id).then(response =>{
            dispatch(setProfile(response))
            dispatch(showPreloader(false));
        })
})
}
export const getUpdate=(id,name,last_name,email)=>{
    return (dispatch)=>{
        profileAPI.getUpdateUser(id,name,last_name,email).then(response => response.data)
    }
}
export default profileReducer;