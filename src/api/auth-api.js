import  axios from "axios";

let instance = axios.create({
    baseURL :"http://copyrest/web/v1/",
    headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`}
})

export const authAPI = ({
    login(username,password){
        return instance.post(`user/login`,{username,password})
    },
    logout() {
        return instance.delete(`user/logout`)
    },
    me(){
        return instance.get(`user/me`)
    }
})