import React from "react";
import EditTemplate from "../Helpers/EditTemplate";
import { USER_LOWERCASE, USERS_LOWERCASE } from "../Helpers/reusableVariables";

const EditUser = () => {

    return (

        <EditTemplate
            fetchDataName={USERS_LOWERCASE}
            editTitle={USER_LOWERCASE}
        />
    
    )

}

export default EditUser;