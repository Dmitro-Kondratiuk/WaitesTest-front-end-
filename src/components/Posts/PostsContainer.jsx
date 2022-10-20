import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
import {getPosts, setCurrentPage} from "../../redux/posts-reducer";


class PostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts(this.props.currentPage);

    }
    onPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getPosts(pageNumber)
    }

    render() {
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
        currentPage: state.postsPage.currentPage
    }
}


export default connect(mapStateToProps, {getPosts,setCurrentPage})(PostsContainer);