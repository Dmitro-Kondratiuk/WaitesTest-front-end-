import {connect} from "react-redux";
import React from "react";
import Post from "./Post";
import {getOnePost} from "../../redux/posts-reducer";
import {compose} from "redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";


class PostContainer extends React.Component {

    componentDidMount() {
        let id = this.props.router.params.id
        this.props.getOnePost(id)
    }

    render() {
        return <Post post={this.props.post} author={this.props.author}/>
    }
}

const mapStateToProps = (state) => ({
    post: state.postsPage.post,
    author: state.postsPage.author
})
function withRouter(PostContainer){
    function PostContainerAPIPops(props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams()
        return(<PostContainer
            {...props}
            router={{ location, navigate, params }} />)
    }
    return PostContainerAPIPops
}

export default compose(connect(mapStateToProps, {getOnePost}))(withRouter(PostContainer))