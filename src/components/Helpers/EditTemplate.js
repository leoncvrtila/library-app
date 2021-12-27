import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchMethod } from "../Helpers/functions";
import { fetchEditHandler } from "../Helpers/functions";

const EditTemplate = (props) => {

    const params = useParams();

    const {id} = params;

    const [editDataState, setEditDataState] = useState([]);

    const [isItChangedState, setIsItChangedState] = useState(false);

    useEffect(() => {

        fetchEditHandler(setEditDataState, id, props.fetchDataName);

    }, [])

    const onInputChange = (e, inputName, id, authorId) => {

        let newState = [...editDataState];

        if (props.editTitle === "user") {

            newState[id].value = e.target.value;
    
            newState[id].error = e.target.value.trim() === "" ? true : false;

        } else {

            if (inputName === "Author") {

                newState[id].value[authorId].fullName = e.target.value;
    
                newState[id].value[authorId].error = e.target.value.trim() === "" ? true : false;
    
            } else {
    
                newState[id].value = e.target.value;
    
                newState[id].error = e.target.value.trim() === "" ? true : false;
    
            }

        }

        setEditDataState([...newState]);

        setIsItChangedState(true);

    }

    const saveHandler = () => {

        const authorsData = [];

        if (!isItChangedState) {
            return;
        }

        if (props.editTitle === "book") {

            for (let key in editDataState) {
                
                if (editDataState[key].error) {
                    return;
                }
    
                if(editDataState[key].title === "Author") {
                    
                    for (let authorKey in editDataState[key].value) {
    
                        if (editDataState[key].value[authorKey].error) {
                            return;
                        }
    
                    }
                    
                }
    
                
            }
    
            for (let key in editDataState) {
    
                for (let authorsKey in editDataState[key].value) {
    
                    if (editDataState[key].title === "Author") {
    
                        authorsData.push(
                            editDataState[key].value[authorsKey].fullName
                        )
    
                    }
    
                }
            }
        
        }

        let data = {};

        if (props.editTitle === "book") {

            data = {
                thumbnailUrl: editDataState[0].value,
                title: editDataState[1].value,
                authors: authorsData,
                shortDescription: editDataState[3].value.slice(0, 50),
                longDescription: editDataState[3].value,
                pageCount: editDataState[4].value,
                borrowed: editDataState[5].value
            }

        } else {

            data = {
                picture: editDataState[0].value,
                name: editDataState[1].value,
                gender: editDataState[2].value,
                birthday: editDataState[3].value,
                phone: editDataState[4].value,
                address: editDataState[5].value,
                email: editDataState[6].value
            }

        }

        fetchMethod("https://library-38cf7-default-rtdb.firebaseio.com/" + props.fetchDataName + "/" + id + ".json", "PUT", data, null);

    }

    const editMap = editDataState.map((el, index) => {

        const Element = el.tag;

        return (

            <Fragment key={el.name + index}>

                {

                    el.tag === "input" ?

                        <div className="EditElement">

                            <p><b>{el.title}: </b></p>
                            <Element type={el.type} onChange={(e) => onInputChange(e, el.name, index, null)} value={el.value} name={el.title}/>
                            <div className="InputError" style={{display: el.error ? "block" : "none"}}>Required field</div>

                        </div>

                    :

                    el.name === "authors" ?

                        el.value.map((author, authorIndex) => {

                            return (

                                <div className="EditElement" key={authorIndex}>

                                    <p><b>{el.title}: </b></p>
                                    <input type={author.type} onChange={(e) => onInputChange(e, el.title, index, authorIndex)} value={author.fullName} name={el.title} />
                                    <div className="InputError" style={{display: author.error ? "block" : "none"}}>Required field</div>

                                </div>
                                
                            )

                        })

                    :
                    
                    el.title === "Borrowed" ? 

                        null

                    :

                        <div className="EditElement">

                            <p><b>{el.title}: </b></p>
                            <textarea type={el.type} onChange={(e) => onInputChange(e, el.name, index, null)} value={el.value} name={el.title}></textarea>
                            <div className="InputError" style={{display: el.error ? "block" : "none"}}>Required field</div>

                        </div>

                }

            </Fragment>


        )

    })

    return (

        <div className="Edit">

            <h1>Edit {props.editTitle}</h1>

            {editMap}

            <Link 
                to={isItChangedState ? props.editTitle === "user" ? "/all-users" : "/" : "#"} 
                style={{
                    background: isItChangedState ? "#3d9749" : "grey", 
                    borderColor: isItChangedState ? "#3d9749" : "grey",
                    cursor: isItChangedState ? "pointer" : "not-allowed"}}
                    onClick={saveHandler}>
            Save</Link>

            <Link 
                style={{background: "#fd8989", borderColor: "#fd8989"}} 
                to={props.editTitle === "user" ? "/all-users" : "/"}>
            Cancel</Link>

        </div>

    )

}

export default EditTemplate;