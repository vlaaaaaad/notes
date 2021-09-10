import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import uuid from "react-uuid";

export default function NotesList({notes, createNote, selected, setSelected}){
    return(
    <div className="notesList">
        <Button variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={createNote}
            >
            New
        </Button>

        {notes.map((note) => (
            <div key={uuid()}>
                <Button
                    className = {note.id === selected.id ? "selectedNote" : ""}
                    size = "large"
                    onClick = {() => setSelected(note)}
                >      
                {note.title.length > 25 ? note.title.substr(0, 25) + "..." : note.title}
                </Button>
            </div>
        ))}
    </div>
    );
}