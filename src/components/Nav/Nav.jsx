import class_name from "./Nav.module.css"
import {NavLink} from "react-router-dom";

function Nav(){
    let profile = "/profile"
    let post = "/posts"
    let users = "/users"


    return(
        <nav className={class_name.nav}>
            <div>
                <NavLink to={profile} className = { navData => navData.isActive ? class_name.active : class_name.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to={post} className = { navData => navData.isActive ? class_name.active : class_name.item }>Posts</NavLink>
            </div>
            <div>
                <NavLink to={users} className = { navData => navData.isActive ? class_name.active : class_name.item }>Users</NavLink>
            </div>
        </nav>
    );
}
export  default  Nav;