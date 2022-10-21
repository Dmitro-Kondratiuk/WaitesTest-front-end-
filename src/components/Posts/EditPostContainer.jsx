import React from "react";
import {connect} from "react-redux";
import EditPost from "./EditPost";
import {getOnePost} from "../../redux/posts-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";

class EditPostContainer extends React.Component{
    componentDidMount() {

        let id = this.props.router.params.id
        this.props.getOnePost(id)
    }
    render() {
        return <EditPost post={this.props.post}/>
    }

}
function withRouter(EditPostContainer){
    function PostContainerAPIPops(props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams()
        return(<EditPostContainer
            {...props}
            router={{ location, navigate, params }} />)
    }
    return PostContainerAPIPops
}
const mapStateToProps=(state)=>({
    post: state.postsPage.post
})
export default compose(connect(mapStateToProps,{getOnePost}))(withRouter(EditPostContainer))