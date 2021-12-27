import React from "react";

const AllBooksTemplate = (props) => {

    return (

        <div className="AllBooks">
            
            <div className="AllBooksWrapp">

                {
                    props.allBooksMap                    
                }

            </div>

        </div>

    )

}

export default AllBooksTemplate;