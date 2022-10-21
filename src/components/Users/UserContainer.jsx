import Users from "./Users";
import {connect} from "react-redux";
import {getUser} from "../../redux/user-reducer";
import React from "react";
import {Navigate} from "react-router";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        if(!this.props.isAuth){
            return <Navigate to={"/login"}/>
        }
        return <Users users={this.props.users}/>
    }
}

const mapStateToProps = (state) => ({
    users: state.userPage.users,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {getUser})(UserContainer)