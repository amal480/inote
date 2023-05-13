
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const noteInitial = [
        {
            "_id": "6451372720fce7375bef9167",
            "user": "644b95aa1f5f9da6652295d1",
            "title": "title123",
            "description": "aodaonads",
            "tag": "tag",
            "timestamp": "2023-05-02T16:15:35.683Z",
            "__v": 0
        },
        {
            "_id": "6451374b20fce7375bef9169",
            "user": "644b95aa1f5f9da6652295d1",
            "title": "update",
            "description": "updateupdate",
            "tag": "update",
            "timestamp": "2023-05-02T16:16:11.569Z",
            "__v": 0
        },
        {
            "_id": "6451374b20fce7375bef9169",
            "user": "644b95aa1f5f9da6652295d1",
            "title": "update",
            "description": "updateupdate",
            "tag": "update",
            "timestamp": "2023-05-02T16:16:11.569Z",
            "__v": 0
        },
        {
            "_id": "6451374b20fce7375bef9169",
            "user": "644b95aa1f5f9da6652295d1",
            "title": "update",
            "description": "updateupdate",
            "tag": "update",
            "timestamp": "2023-05-02T16:16:11.569Z",
            "__v": 0
        },
        {
            "_id": "6451374b20fce7375bef9169",
            "user": "644b95aa1f5f9da6652295d1",
            "title": "update",
            "description": "updateupdate",
            "tag": "update",
            "timestamp": "2023-05-02T16:16:11.569Z",
            "__v": 0
        },
        {
            "_id": "6451374b20fce7375bef9169",
            "user": "644b95aa1f5f9da6652295d1",
            "title": "update",
            "description": "updateupdate",
            "tag": "update",
            "timestamp": "2023-05-02T16:16:11.569Z",
            "__v": 0
        },
        {
            "_id": "6451374b20fce7375bef9169",
            "user": "644b95aa1f5f9da6652295d1",
            "title": "update",
            "description": "updateupdate",
            "tag": "update",
            "timestamp": "2023-05-02T16:16:11.569Z",
            "__v": 0
        }
    ]
const [notes, setNotes] = useState(noteInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;