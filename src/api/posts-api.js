import axios from "axios";

let instance = axios.create({
    baseURL: "http://copyrest/web/v1/",
    headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}
})

export const postApi = ({
    getPost(currentPage) {
        return instance.get(`posts?page=${currentPage}&expand=user`,{ headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}}).then(response => {
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
        return instance.get(`posts/${id}?expand=user,photos`,{ headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}}).then(response => {
            return response.data
        })
    },
    getCreate(name, description, price, links) {
        return instance.post(`post/create`, {name, description, price, links},{headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}}).then(response => {
            return response.data
        })
    },
    getUpdatePost(id, name, description, price, links) {
        debugger
        return instance.put(`post/${id}`, {name, description, price, links},{headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}}).then(response => {
            debugger
            return response.data
        })
    },
    getUpdatePhoto(id, link) {
        return instance.post(`photos`, {id, link},{headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}}).then(response => {
            return response.data
        })
    }

})
