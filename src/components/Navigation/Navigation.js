import React from "react";
import { NavLink } from 'react-router-dom'

import home from "../../assets/images/home.png"
import borrowedBooks from "../../assets/images/borrowed-books.png"
import addBook from "../../assets/images/add-book.png"
import users from "../../assets/images/users.png"
import addUser from "../../assets/images/add-user.png"

const mobWidth = window.innerWidth <= 425 ? true : false;

const Navigation = () => {

    const links = [
        {imageUrl: home, value: "All Books", url: "/"},
        {imageUrl: borrowedBooks, value: "Borrowed Books", url: "borrowed-books"},
        {imageUrl: addBook, value: "Add Book", url: "add-book"},
        {imageUrl: users, value: "All Users", url: "all-users"},
        {imageUrl: addUser, value: "Add User", url: "add-user"}
    ]

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