import Users from "./Users";
import {connect} from "react-redux";
import {getUser} from "../../redux/user-reducer";
import React from "react";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return <Users users={this.props.users}/>
    }
}

const mapStateToProps = (state) => ({
    users: state.userPage.users,
})


export default connect(mapStateToProps, {getUser})(UserContainer)