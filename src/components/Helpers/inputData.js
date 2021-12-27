import { TagInput, TagTextArea, TypeText, TypeNumber, TypeEmail } from "./reusableVariables";

export const inputBookData = [
    {id: 0, value: "", type:TypeText, title: "Image link", error: false, tag: TagInput},
    {id: 1, value: "", type:TypeText, title: "Title", error: false, tag: TagInput},
    {id: 2, value: "", type:TypeText, title: "Author/s (separate them with comma)", error: false, tag: TagInput},
    {id: 3, value: "", type:TypeText, title: "Description", error: false, tag: TagTextArea},
    {id: 4, value: "", type:TypeNumber, title: "Pages", error: false, tag: TagInput}
]

export const inputUserData = [
    {id: 0, value: "", type:TypeText, title: "Image link", error: false, tag: TagInput},
    {id: 1, value: "", type:TypeText, title: "Full name", error: false, tag: TagInput},
    {id: 2, value: "", type:TypeText, title: "Gender", error: false, tag: TagInput},
    {id: 3, value: "", type:TypeText, title: "Birthday", error: false, tag: TagInput},
    {id: 4, value: "", type:TypeText, title: "Address", error: false, tag: TagInput},
    {id: 5, value: "", type:TypeEmail, title: "Email", error: false, tag: TagInput},
    {id: 6, value: "", type:TypeNumber, title: "Phone", error: false, tag: TagInput}
]

