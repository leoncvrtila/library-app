import React from "react";
import EditTemplate from "../Helpers/EditTemplate";
import { BOOK_LOWERCASE, BOOKS_LOWERCASE } from "../Helpers/reusableVariables";

const EditBook = () => {

    return (

        <EditTemplate
            fetchDataName={BOOKS_LOWERCASE}
            editTitle={BOOK_LOWERCASE}
        />
    
    )

}

export default EditBook;