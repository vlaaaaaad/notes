import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function NoteDetails(){
    return(
    <div className="noteDetails">
        <div class="header">
            Title
            <IconButton aria-label="delete" size="medium">
                <DeleteIcon />
            </IconButton>
        </div>
        <input type="text" />

        Description
        <textarea placeholder="" />

        <Button variant="contained"
            style={{backgroundColor: "#388e3c", color: "white"}}
            // onClick={createNote}
            >
            Save
        </Button>

    </div>
    );
}