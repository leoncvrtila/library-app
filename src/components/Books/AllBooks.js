import React, { Fragment, useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import BookTemplate from "../Helpers/BookTemplate";
import AllBooksTemplate from "../Helpers/AllBooksTemplate";
import { borrowHandler, fetchBookHandler } from "../Helpers/functions";
import { allBooksApi } from "../Helpers/api";

const AllBooks = () => {

    const [allBooksState, setAllBooksState] = useState([]);

    const fetchData = () => {

        fetchBookHandler(allBooksApi, setAllBooksState)

    }

    useEffect(fetchData, [])

    const borrowClick = (e, bookId) => {

        borrowHandler(e, bookId, allBooksState, fetchData);

    }

    const allBooksMap = allBooksState.map(book => {

        return (

            <BookTemplate 
                borrowClick={borrowClick}
                book={book}
                key={book.id}
            />

        )

    })


    return (

        <Fragment>

            {
                allBooksState.length === 0 ?

                <div className="SpinnerWrapp"><LoadingSpinner/></div> :

                <AllBooksTemplate allBooksMap={allBooksMap} />
            }

        </Fragment>

        

    )

}

export default AllBooks;