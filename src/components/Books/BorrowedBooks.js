import React, { Fragment, useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import BookTemplate from "../Helpers/BookTemplate";
import AllBooksTemplate from "../Helpers/AllBooksTemplate";
import { allBooksApi } from "../Helpers/api";
import { borrowHandler, fetchBookHandler } from "../Helpers/functions";

const BorrowedBooks = () => {

    const [borrowedBooksState, setBorrowedBooksState] = useState([]);

    const fetchData = () => {

        fetchBookHandler(allBooksApi, setBorrowedBooksState);       

    }

    useEffect(fetchData, [])

    const borrowClick = (e, bookId) => {

        borrowHandler(e, bookId, borrowedBooksState, fetchData);

    }

    const allBooksMap = borrowedBooksState.map(book => {

        return (

            book.borrowed ? 

            <BookTemplate 
                borrowClick={borrowClick}
                book={book}
                key={book.id}
            />

            :

            null

        )

    })

    return (

        <Fragment>

            {

                borrowedBooksState.length === 0 ?

                <div className="SpinnerWrapp"><LoadingSpinner/></div> :

                <AllBooksTemplate allBooksMap={allBooksMap} /> 
            }

        </Fragment>

    )    

}

export default BorrowedBooks;