import { TagInput, TagTextArea, TypeText, TypeNumber, TypeEmail, GET, PUT, POST } from "./reusableVariables";

export const fetchMethod = (URL, method, data, functionHandler) => {

    fetch(URL, {
        method: method, 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {

            if (method === GET || method === PUT) {


                if (functionHandler !== null) {
                    functionHandler();
                    return data;

                } else {

                    return data;

                }

            }
            
            if (functionHandler !== null) {

                functionHandler();

            } 
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        return () => {}

}

export const fetchBookHandler = (URL, setBorrowedBooksbookState) => {

    fetch(URL)
        .then(response => response.json())
        .then(data => {

            let newData = [];

            for (let key in data) {

                newData.push({
                    ...data[key],
                    borrowed: data[key].borrowed !== 'undefined' ? data[key].borrowed : false,
                    id: key
                })

            }

            setBorrowedBooksbookState(newData);

        })

        return () => {}

}

export const borrowHandler = (e, bookId, bookState, fetchData) => {

    const URL = 'https://library-38cf7-default-rtdb.firebaseio.com/books/' + bookId + '.json';

    let newBookState = [];

    newBookState.push(...bookState);

    newBookState[bookId].borrowed = !bookState[bookId].borrowed;
    
    const data = newBookState[bookId];

    fetchMethod(URL, PUT, data, fetchData);

}

export const postData = (URL, data) => {

    fetchMethod(URL, POST, data, null);

}

export const fetchUsersHandler = (URL, setAllUsersState) => {

    fetch(URL)
    .then(response => response.json())
    .then(data => {

        let newData = [];

        for (let key in data) {

            newData.push({
                ...data[key],
                id: key
            })

        }

        setAllUsersState(newData);

    })

    return () => {}

}

export const fetchEditHandler = (setEditDataState, id, fetchDataName) => {

    fetch("https://library-38cf7-default-rtdb.firebaseio.com/" + fetchDataName + "/" + id + ".json")
        .then(response => response.json())
        .then(data => {

            let newData = [];
            let authors = [];

            if (fetchDataName === "books") {

                for (let key in data.authors) {
        
                    authors.push({
                        id: key,
                        error: false,
                        fullName: data.authors[key],
                        tag: TagInput,
                        type: TypeText
                    })
        
                }
    
                newData = [
                    {type: TypeText,title: "Image link", name:"thumbnailUrl", tag: TagInput, value: data.thumbnailUrl, error: false},
                    {type: TypeText,title: "Title", name:"title", tag: TagInput, value: data.title, error: false},
                    {title: "Author", name:"authors", value: authors},
                    {type: TypeText,title: "Description", name:"longDescription", tag: TagTextArea, value: data.longDescription, error: false},
                    {type: TypeNumber,title: "Pages", name:"pageCount", tag: TagInput, value: data.pageCount, error: false},
                    {title: "Borrowed", value: data.borrowed === undefined ? false : data.borrowed}
                ]
            
            } else {

                newData = [
                    {type: TypeText,title: "Image link", name:"imageLink", tag: TagInput, value: data.picture, error: false},
                    {type: TypeText,title: "Full name", name:"fullName", tag: TagInput, value: data.name, error: false},
                    {type: TypeText,title: "Gender", name:"gender", tag: TagInput, value: data.gender, error: false},
                    {type: TypeText,title: "Birthday", name:"birthday", tag: TagInput, value: data.birthday, error: false},
                    {type: TypeText,title: "Phone", name:"phone", tag: TagInput, value: data.phone, error: false},
                    {type: TypeText,title: "Address", name:"address", tag: TagInput, value: data.address, error: false},
                    {type: TypeEmail,title: "Email", name: TypeEmail, tag: TagInput, value: data.email, error: false}
                ]

            }

            setEditDataState(newData);

        })

        return () => {}

}