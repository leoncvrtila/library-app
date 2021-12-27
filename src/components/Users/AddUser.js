import React, { useState } from "react";
import Inputs from "../Helpers/Inputs";
import { inputUserData } from "../Helpers/inputData";
import { USER } from "../Helpers/reusableVariables";

const AddUser = () => {

    const [inputsState, setInputsState] = useState([...inputUserData]); 

    return (

        <Inputs 
            postUrl={"https://library-38cf7-default-rtdb.firebaseio.com/users.json"}
            mainTitle={'Add User'}
            inputsState={inputsState}
            setInputsState={setInputsState}
            inputData={inputUserData}
            addingNew={USER}
        />

    )

}

export default AddUser;