import './App.css';
import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import PostsContainer from "./components/Posts/PostsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import PostContainer from "./components/Posts/PostContainer";
import Register from "./components/Login/Register";
import {Component} from "react";
import {connect} from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import EditPostContainer from "./components/Posts/EditPostContainer";
import PostCreateContainer from "./components/Posts/PostCreateContainer";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Prelader";


class App extends Component {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-one">
                <HeaderContainer/>
                <Nav/>
                <div className="app-one-content">
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/profile/:id" element={<ProfileContainer/>}/>
                        <Route path="/posts" element={<PostsContainer/>}/>
                        <Route path="/posts/create" element={<PostCreateContainer/>}/>
                        <Route path="/post/:id" element={<PostContainer/>}/>
                        <Route path="/posts/edit-post/:id" element={<EditPostContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/login/register" element={<Register/>}/>
                        <Route path="/users" element={<UserContainer/>}/>
                        <Route path="/users/register" element={<Register/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedApp})(App);
