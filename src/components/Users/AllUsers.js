import React, { Fragment, useEffect, useState } from "react";
import { fetchUsersHandler } from "../Helpers/functions";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Link } from "react-router-dom";
import { allUsersApi } from "../Helpers/api";

const AllUsers = () => {

    const [allusersState, setAllUsersState] = useState([]);

    useEffect(() => {

        fetchUsersHandler(allUsersApi, setAllUsersState);

    }, [])

    const usersMap = allusersState.map(user => {

        return (

            <div className="User" key={user.id}>

                <img src={user.picture}/>

                <h3>{user.name}</h3>

                <p><b>Gender:</b> {user.gender}</p>

                <p><b>Birthday:</b> {user.birthday}</p>

                <p><b>Address:</b> {user.address}</p>

                <p><b>Email:</b> {user.email}</p>

                <p><b>Phone:</b> {user.phone}</p>

                <Link className="UserButton" to={"/edit-user/" + user.id}>Edit</Link>

            </div>

        )

    })

    return (

        <Fragment>

            {
                allusersState.length === 0 ?

                <div className="SpinnerWrapp"><LoadingSpinner/></div>
                
                :

                <div className="AllUsers">

                    {usersMap}

                </div>
            }
            
        </Fragment>
    )

}

export default AllUsers;