import axios from "axios";

let instance = axios.create({
    baseURL:"http://copyrest/web/v1/",
    headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`}
})

export const userAPI =({
    getUsers(){
        return instance.get(`user`).then(response =>{
            return response.data})
    },
    getRegister(username,password,name,last_name,email){
        return instance.post(`user/register`,{username,password,name,last_name,email})
    }
})