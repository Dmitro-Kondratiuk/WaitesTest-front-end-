import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {Navigate} from "react-router";

class ProfileContainer extends React.Component{

    refreshProfile() {

        let id = this.props.router.params.id
        if (!id){
            id = this.props.id
        }
        this.props.getProfile(id)

    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.id !== prevProps.router.params.id){
            this.refreshProfile()
        }
    }

    render() {
        if(!this.props.isAuth){
            return <Navigate to={"/login"}/>
        }
        return <Profile profile={this.props.profile}/>
    }

}
const mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    id: state.auth.id,
    isAuth: state.auth.isAuth
})
function withRouter(ProfileContainer){
    function PostContainerAPIPops(props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams()
        return(<ProfileContainer
            {...props}
            router={{ location, navigate, params }} />)
    }
    return PostContainerAPIPops
}
export default compose(connect(mapStateToProps,{getProfile}))(withRouter(ProfileContainer))