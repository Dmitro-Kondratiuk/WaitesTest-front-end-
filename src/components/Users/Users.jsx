import no_image from "../../uploads/img_546302.png"
import style from "./User.module.css"
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Prelader";

const Users = (props) => {
    if (!props.users){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <NavLink to={'register'}>
                    <div>Create User</div>
                </NavLink>
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img className={style.image} src={no_image} alt="no-image"/>
                        </NavLink>
                    </div>
                    <div>
                        <span>Name: {user.name}</span>
                    </div>
                    <div>
                        <span>Last name: {user.last_name}</span>
                    </div>
                    <div>
                        <span>Email: {user.email}</span>
                    </div>
                    <br/>
                </div>)
            }
        </div>
    )
}
export default Users