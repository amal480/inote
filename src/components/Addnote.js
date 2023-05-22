import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const Addnote = () => {
    const context = useContext(noteContext);
    const {addNote } = context;

    const [note, setnote] = useState({title:"",description:"",tag:""})

    const handleChange=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setnote({title:"",description:"",tag:""})
    }
    const change=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }

    return (
        <div className='container'>
            <h1>Add a note</h1>
            <form onSubmit={handleChange}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" minLength={5} required name="title" value={note.title} aria-describedby="emailHelp" onChange={change}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" minLength={5} required name="description" value={note.description} id="description" onChange={change}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" value={note.tag} name="tag" id="tag" onChange={change}/>
                </div>
                
                <button type="submit" className="btn btn-primary" disabled={note.title.length<5||note.description.length<5}>Submit</button>
            </form>
        </div>
    )
}

export default Addnote