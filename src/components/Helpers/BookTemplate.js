import React from "react";
import { Link } from "react-router-dom";
import { AUTHOR, AUTHORS } from "./reusableVariables";

const BookTemplate = (props) => {

    return (

        <div className="Book">

            <div className="BookImage">
                <img src={props.book.thumbnailUrl} alt={props.book.title} />
            </div>

            <div>

                <div className="BookHeader">

                    <div><h3>{props.book.title}</h3></div>

                    <Link className="BookHeaderButton" to={"/edit-book/" + props.book.id}>Edit</Link>

                </div>
                

                <p> <b>{props.book.authors.length === 1 ? AUTHOR : AUTHORS}: </b>
                    { 
                        props.book.authors.map(author => {

                            return (
                                
                                <span className={AUTHOR} key={author}>
                                    {author}
                                </span>

                            )

                        })
                    }   
                </p>

                <p> <b>Description:</b> {props.book.shortDescription}</p>

                <p> <b>Pages:</b> {props.book.pageCount}</p>

                <button className="BookBorrowButton" onClick={(e) => props.borrowClick(e, props.book.id)}>

                    {
                        props.book.borrowed ? 'Return' : 'Borrow'
                    }

                </button>

            </div>

        </div>

    )

}

export default BookTemplate;