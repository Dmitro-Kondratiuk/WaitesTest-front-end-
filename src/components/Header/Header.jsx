import class_name from "./Header.module.css"
import { NavLink} from "react-router-dom";


function Header(props) {

    return (
        <header className={class_name.header}>
            <NavLink to={'/posts'}>
                <img className={class_name.image}
                     src={'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}/>
            </NavLink>
            <div className={class_name.login}>
                {props.isAuth
                    ?<div>{props.login} {props.name}_{props.last_name} <button onClick={props.logout}>Logout</button></div>
                    :<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;