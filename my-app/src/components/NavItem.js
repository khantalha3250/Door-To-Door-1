import React from "react";
import {Link} from "react-router-dom"
// import App from "./App";

function NavItem(props){
    return (
    <li className={props.liName}>
       <Link className="nav-link" to={props.link}><i className={props.icon}></i>{props.name}</Link>
    </li>
    )
}
export default NavItem