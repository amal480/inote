
import { useState } from "react";
import NoteContext from "./noteContext";
// import fetchuser from "../../../backend/middleware/fetchuser";

const NoteState = (props) => {
    const host = "http://localhost:5000"

    const [notes, setNotes] = useState([])

    //Get all note
    const getnote = async () => {

        //API call
        const response = await fetch(`${host}/api/notes/getnotes`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0Yjk1YWExZjVmOWRhNjY1MjI5NWQxIn0sImlhdCI6MTY4Mjc0NzM0NX0.eg3RAuO14rh-wch4mUtcDq3QoX6lFKfQyLeZNoDcFik"
            },
        });
        const json = await response.json()
        setNotes(json)
    }

    //Add note
    const addNote = async (title, description, tag) => {

        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0Yjk1YWExZjVmOWRhNjY1MjI5NWQxIn0sImlhdCI6MTY4Mjc0NzM0NX0.eg3RAuO14rh-wch4mUtcDq3QoX6lFKfQyLeZNoDcFik"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note =await response.json();
        setNotes(notes.concat(note))
    }

    //Delete note
    const deleteNote = async (id) => {

        //API call
        const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0Yjk1YWExZjVmOWRhNjY1MjI5NWQxIn0sImlhdCI6MTY4Mjc0NzM0NX0.eg3RAuO14rh-wch4mUtcDq3QoX6lFKfQyLeZNoDcFik"
            },
        });

        console.log("Deleteing node with id:" + id)
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)

    }

    //Edit note
    const editNote = async (id, title, description, tag) => {

        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0Yjk1YWExZjVmOWRhNjY1MjI5NWQxIn0sImlhdCI6MTY4Mjc0NzM0NX0.eg3RAuO14rh-wch4mUtcDq3QoX6lFKfQyLeZNoDcFik"
            },
            body: JSON.stringify({ title, description, tag }),
        });

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