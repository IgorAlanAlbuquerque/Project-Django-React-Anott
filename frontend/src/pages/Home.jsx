import { useState, useEffect } from "react"
import LogoutButton from "../components/Logout"
import api from "../api" 
import Note from "../components/Note"
import "../styles/Home.css"

function Home(){
    const [notes, setNotes] = useState([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        api.get("/api/notes/").then((res) => res.data).then((data) => {setNotes(data)})
    }

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault()
        api.post("/api/notes/", {content, title}).then((res) => {
            if (res.status === 201) alert("Note created successfully");
            else alert("An error occurred create");
            getNotes();
        }).catch((err) => {
            alert(err)
        })
    }

    return <div>
        <div>
            <LogoutButton/>
        </div>
        <div>
            <h2>Notes</h2>
            {notes.map((note) => (
                <Note note={note} onDelete={deleteNote} key={note.id}/>
            ))}
        </div>
        <h2 className="h2CreateNote">Create a Note</h2>
        <form onSubmit={createNote}>
            <label htmlFor="title">Title:</label>
            <br/>
            <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="content">Content:</label>
            <br/>
            <textarea
                id="content"
                name="content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input type="submit" value="Create Note"/>
        </form>
    </div>
}

export default Home