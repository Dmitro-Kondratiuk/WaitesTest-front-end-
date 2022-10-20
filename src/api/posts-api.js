import axios from "axios";

let instance = axios.create({
    baseURL: "http://copyrest/web/v1/",
headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}
})

export const postApi = ({
    getPost(currentPage) {
        return instance.get(`posts?page=${currentPage}&expand=user`).then(response => {
            return response
        })
    },
    onPage(pageNumber) {
        return instance.get(`posts?page=${pageNumber}`)
            .then(response => {
                return response.data;
            });
    },
    getOnePost(id) {
        return instance.get(`posts/${id}?expand=user,photos`).then(response => {
            return response.data
        })
    },
    getCreate(name,description,price,links){
        return instance.post(`post/create`,{name,description,price,links}).then(response =>{
            return response.data
        })
    },
    getUpdatePost(id,name,description,prise,links){
        return instance.put(`post/${id}`,{name,description,prise,links}).then(response =>{return response.data})
    },
    getUpdatePhoto(id,link){
        return instance.post(`photos`,{id,link}).then(response=>{return response.data})
    }

})