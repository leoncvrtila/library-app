import React, { useState } from "react";
import { inputBookData } from "../Helpers/inputData";
import Inputs from "../Helpers/Inputs";

const AddBook = () => {

    const [inputsState, setInputsState] = useState([...inputBookData]); 

    return (

        <Inputs 
            postUrl={"https://library-38cf7-default-rtdb.firebaseio.com/books.json"}
            mainTitle={'Add Book'}
            inputsState={inputsState}
            setInputsState={setInputsState}
            inputData={inputBookData}
            addingNew={"BOOK"}
        />

    )

}

export default AddBook;