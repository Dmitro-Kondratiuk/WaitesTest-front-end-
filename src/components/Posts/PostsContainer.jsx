import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
import {getPosts, setCurrentPage} from "../../redux/posts-reducer";
import {Navigate} from "react-router";
import {autologin} from "../../redux/auth-reducer";


class PostsContainer extends React.Component {
    componentDidMount() {

        this.props.getPosts(this.props.currentPage);

    }
    onPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getPosts(pageNumber)
    }

    render() {
        if(!this.props.isAuth){
            return <Navigate to={"/login"}/>
        }
        return <Posts
            posts={this.props.posts} pageSize={this.props.pageSize}
                      totalPostsCount={this.props.totalPostsCount} currentPage={this.props.currentPage} onPage={this.onPage}/>
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        pageSize: state.postsPage.pageSize,
        totalPostsCount: state.postsPage.totalPostsCount,
        currentPage: state.postsPage.currentPage,
        isAuth : state.auth.isAuth
    }
}


export default connect(mapStateToProps, {getPosts,setCurrentPage,autologin})(PostsContainer);