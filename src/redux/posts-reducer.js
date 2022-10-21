import {postApi} from "../api/posts-api";
import {profileAPI} from "../api/profile-api";

const SET_POSTS = "SET_POSTS";
const SET_POST = "SET_POST";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_POSTS_COUNT = 'SET_TOTAL_POSTS_COUNT'
const SHOW_PRELOADER = 'SHOW_PRELOADER'
const SET_AUTHOR = "SET_AUTHOR"

let initial = {
    posts: [],
    post: [],
    currentPage: 1,
    totalPostsCount: 21,
    pageSize: 10,
    isFetching: false,
    author: null
}
const postsReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state, posts: action.posts
            }
        case SET_POST:
            return {
                ...state, post: action.post
            }
        case SHOW_PRELOADER :
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_POSTS_COUNT:
            return {
                ...state, totalPostsCount: action.totalCount
            }
        case SET_AUTHOR:
            return {
                ...state, author: action.author
            }
        default:
            return state
    }
}


export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setPost = (post) => ({type: SET_POST, post})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalPostsCount = (totalPostsCount) => ({type: SET_TOTAL_POSTS_COUNT, totalCount: totalPostsCount})
export const showPreloader = (isFetching) => ({type: SHOW_PRELOADER, isFetching})
export const serAuthor = (author) => ({type: SET_AUTHOR, author})
export const getPosts = (currentPage) => {
    return (dispatch) => {
        dispatch(showPreloader(true))
        postApi.getPost(currentPage).then(response => {
            dispatch(setPosts(response.data.items))
            dispatch(setTotalPostsCount(response.data._meta.totalCount))
            dispatch(showPreloader(false));
        });
    }
}
export const getOnePost = (id) => {
    return (dispatch) => {
        dispatch(showPreloader(true))
        postApi.getOnePost(id).then(data => {
            dispatch(setPost(data))
            dispatch(serAuthor(data.user.name))
            dispatch(showPreloader(false));
        })
    }
}
export const getCreatePost = (name, description, price, links) => {
    return (dispatch) => {
        dispatch(showPreloader(true))
        postApi.getCreate(name, description, price, links).then(response => response.data)
        dispatch(showPreloader(false))
    }
}
export const getUpdatePost = (id, name, description, price, links) => {
    return (dispatch) => {
        debugger
        postApi.getUpdatePost(id, name, description, price, links).then(data =>
       data)
    }
}
export const getUpdatePhoto = (id, link) => {
    return (dispatch) => {
        dispatch(showPreloader(true))
        postApi.getUpdatePhoto(id, link).then(response => {
            return response.data
        })
        dispatch(showPreloader(false))
    }
}

export default postsReducer;