import React from "react";
import NavItem from "./NavItem";
import {Link} from "react-router-dom"
import nav from "../nav";
function navbarElement(navelement){
   return <NavItem 
    name= {navelement.name}
    liName={navelement.liName}
    icon={navelement.icon}
    link={navelement.link}
/>
}
function Header(){
    return ( <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link class="navbar-brand" to="/"><i class="fas fa-door-open"></i> DOOR TO DOOR</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
        {nav.map(navbarElement)}
        </ul>
    </div>
</nav>)
}
export default Header