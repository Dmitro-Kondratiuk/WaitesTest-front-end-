import axios from "axios";

let instance = axios.create({
    baseURL:"http://copyrest/web/v1/",
})

export const profileAPI =({
    getProfile(id){
        return instance.get(`user/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`}}).then(response =>{return response.data})
    },
    getUpdateUser(id,name,last_name,email){
        return instance.put(`user/${id}`,{name,last_name,email},{headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`}}).then(response =>{return response.data})
    }

})


