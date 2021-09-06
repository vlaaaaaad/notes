import Note from './Note';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default function NotesList({notes, createNote}){
    return(
    <div className="notesList">
    <Button variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={createNote}
        >
          New
    </Button>
        {notes.map((note, index) => (
      <div key={index}>
        <Note title={note.title.substr(0, 25)+"..."} description={note.description} creationDate={note.creationDate}>
          </Note>
      </div>
    ))}
    </div>
    );
}