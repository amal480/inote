import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

const Note = (props) => {
    const context = useContext(noteContext);
    const { notes, getnote, editNote } = context;
    let navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getnote()
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])



    const [note, setnote] = useState({ eid: "", etitle: "", edescription: "", etag: "" })

    const ref = useRef(null)
    const refClose = useRef(null)

    const updatenote = (currentnote) => {
        ref.current.click()
        setnote({ eid: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })
        props.showalert("Note updated successfully", "success")
    }



    const handleChange = (e) => {
        console.log("Updating the note", note)
        editNote(note.eid, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        e.preventDefault();
    }
    const change = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Addnote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleChange}>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" minLength={5} required name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={change} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" minLength={5} required name="edescription" id="edescription" value={note.edescription} onChange={change} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" name="etag" id="etag" value={note.etag} onChange={change} />
                                </div>

                                {/* <button type="submit" className="btn btn-primary" onClick={handleChange}>Submit</button> */}
                                <div className="modal-footer">
                                    <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="submit" className="btn btn-primary" /*onClick={handleChange} *Instead giving onSubmit() on form tag for validation as onClick wont work for form validations like minLength etc*/>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <h2>Your Notes</h2>
                {notes.length === 0 && "No notes to display"}
                {notes.map((note) => {
                    return <Noteitem key={note._id} updatenote={updatenote} note={note} />
                })}
            </div>
        </>
    )
}

export default Note