import React, { Fragment } from "react";
import { postData } from "./functions";

const Inputs = (props) => {

    const resetInputData = () => {

        let resetInputData = [...props.inputData];

        for (let key in props.inputData) {

            resetInputData[key].value = "";

        }

        props.setInputsState([...resetInputData]);

    }

    const addBookHandler = () => {

        let newInputs = [...props.inputsState];

        if (

                props.addingNew === "USER" ?

                props.inputsState[0].value === "" ||
                props.inputsState[1].value === "" ||
                props.inputsState[3].value === "" ||
                props.inputsState[4].value === "" ||
                props.inputsState[5].value === "" ||
                props.inputsState[6].value === "" 

                :

                props.inputsState[0].value === "" ||
                props.inputsState[1].value === "" ||
                props.inputsState[3].value === "" ||
                props.inputsState[4].value === "" 
                
            ) 
        {

            for (let key in newInputs) {

                if (newInputs[key].value === "") {

                    newInputs[key].error = true;

                } 

            }

            props.setInputsState(newInputs);

            return

        }

        const authors = props.inputsState[2].value.split(",");

        const bookData = {
                thumbnailUrl: props.inputsState[0].value,
                title: props.inputsState[1].value,
                authors: authors,
                longDescription: props.inputsState[3].value,
                shortDescription: props.inputsState[3].value.slice(0, 50),
                pageCount: props.inputsState[4].value
            }

        let userData = {};

        if (props.addingNew === "USER") {

            userData = {
                picture: props.inputsState[0].value,
                name: props.inputsState[1].value,
                gender: props.inputsState[2].value,
                birthday: props.inputsState[3].value,
                address: props.inputsState[4].value,
                email: props.inputsState[5].value,
                phone: props.inputsState[6].value
            }

        }
        
        postData(
            props.postUrl,
            props.addingNew === "USER" ? userData : bookData
        );

        resetInputData();

    }

    const onInputChange = (e, id) => {

        let newInputs = [...props.inputsState];

        newInputs[id].value = e.target.value;

        newInputs[id].error = e.target.value.trim() === "" ? true : false;

        props.setInputsState([...newInputs]);

    }

    const inputsMap = props.inputsState.map(el => {

        const Element = el.tag;

        return (

            <Fragment key={el.title}>
                
                {

                    el.tag === "input" ?

                    <Fragment>
                        <p>{el.title}</p>
                        <Element type={el.type} onChange={(e) => onInputChange(e, el.id)} value={el.value} name={el.title} /> 
                        <div className="InputError" style={{display: el.error ? "block" : "none"}}>Required field</div>
                    </Fragment>
                    
                    :

                    <Fragment>
                        <p>{el.title}</p>
                        <Element type={el.type} onChange={(e) => onInputChange(e, el.id)} value={el.value} name={el.title} ></Element>  
                        <div className="InputError" style={{display: el.error ? "block" : "none"}}>Required field</div>
                    </Fragment>               

                }

            </Fragment>

        )

    })

    return (

        <div className="AddBook">

            <h2>{props.mainTitle}</h2>

            {inputsMap}

            <button className="AddBookButton" onClick={addBookHandler} >Add</button>

        </div>

    )


}

export default Inputs;