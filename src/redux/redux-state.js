import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import thunkMiddleware from "redux-thunk";
import userReducer from "./user-reducer";
import profileReducer from "./profile-reducer";
import {reducer as formReducer} from "redux-form"
import authReducer from "./auth-reducer";
import AppReducer from "./app-reducer";

let reducers = combineReducers({
    auth : authReducer,
    profilePage: profileReducer,
    userPage : userReducer,
    postsPage : postsReducer,
    form: formReducer,
    app:AppReducer
});
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export  default  store