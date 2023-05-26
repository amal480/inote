
import { useState } from "react";
import NoteContext from "./noteContext";
// import fetchuser from "../../../backend/middleware/fetchuser";

const NoteState = (props) => {
    // const host = process.env.REACT_APP_HOST

    const [notes, setNotes] = useState([])

    //Get all note
    const getnote = async () => {

        //API call
        const response = await fetch(`${process.env.REACT_APP_URL}/api/notes/getnotes`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const json = await response.json()
        setNotes(json)
    }

    //Add note
    const addNote = async (title, description, tag) => {

        //API call
        const response = await fetch(`${process.env.REACT_APP_URL}/api/notes/addnote`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note =await response.json();
        setNotes(notes.concat(note))
    }

    //Delete note
    const deleteNote = async (id) => {

        //API call
        const response = await fetch(`${process.env.REACT_APP_URL}/api/notes/delete/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });

        console.log("Deleteing node with id:" + id)
        response.json()
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)

    }

    //Edit note
    const editNote = async (id, title, description, tag) => {

        //API call
        const response = await fetch(`${process.env.REACT_APP_URL}/api/notes/updatenote/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag }),
        });

        response.json()
        //Logic for editing note
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, getnote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;