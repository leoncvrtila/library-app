import React from "react";
import { NavLink } from 'react-router-dom'
import { links } from "./links";

const mobWidth = window.innerWidth <= 425 ? true : false;

const Navigation = () => {

    const mapLinks = links.map(link => {

        return mobWidth ? 
               <NavLink key={link.value} to={link.url} ><img src={link.imageUrl} alt={link.value} /></NavLink> : 
               <NavLink key={link.value} to={link.url} >{link.value}</NavLink>

    })

    return(
        <nav className={mobWidth ? "MobNavigationWrapper" : "NavigationWrapper"}>
            {
                mapLinks
            }
        </nav>
    )

}

export default Navigation;