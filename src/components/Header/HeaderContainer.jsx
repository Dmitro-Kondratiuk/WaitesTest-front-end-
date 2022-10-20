import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends  React.Component {

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth,
    login : state.auth.login,
    logout: state.auth.logout,
    name : state.auth.name,
    last_name: state.auth.last_name

})
export default connect(mapStateToProps,{logout})(HeaderContainer)