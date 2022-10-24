import React from "react";
import PostsCreate from "./PostsCreate";
import {connect} from "react-redux";

class PostCreateContainer extends React.Component{
    render() {
        let userid = this.props.id
        return <PostsCreate id={userid} />
    }
}

const mapStateToProps =(state)=>({
    id : state.auth.id
})

export default connect(mapStateToProps,{})(PostCreateContainer)