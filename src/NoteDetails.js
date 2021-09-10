import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

export default function NoteDetails({selected, setSelected, removeNote, notesAmount, updateNote}){
    if(!selected) return <div className="noNoteDetails">Select existing note or create a new one</div>
    if(!notesAmount) return <div className="noNoteDetails">Create a new note</div>

    return(
    <div className="noteDetails">
        <div className="header">
            <div>Title</div>
            <IconButton 
                aria-label="delete" 
                size="small"
                style={{padding: "5px"}}
                onClick={() => removeNote(selected.id)}
                >
                <DeleteIcon color="secondary"/>
            </IconButton>
        </div>
        <input 
            type="text" 
            value={selected.title}
            onChange={(event) => setSelected({
                id: selected.id, 
                title: event.target.value, 
                description: selected.description, 
                creationDate: Date.now()
            })}
            style={selected.title.length < 3 ||
                selected.title.length > 120 ? {color: "#e91e63"} : {color: "inherit"}}
        />

        Description
        <textarea 
            value={selected.description} 
            onChange={(event) => setSelected({
                id: selected.id, 
                title: selected.title, 
                description: event.target.value, 
                creationDate: Date.now()
            })}
            style={selected.description.length < 5 ||
                selected.description.length > 500 ? {color: "#e91e63"} : {color: "inherit"}}
        />

        <Button variant="contained"
            startIcon={<SaveIcon />}
            color="primary"
            style={{/*backgroundColor: "#00a152",*/ color: "white",alignSelf: "center"}}
            onClick={() => updateNote(selected)}
            disabled={
                selected.title.length < 3 || 
                selected.title.length > 120 ||
                selected.description.length < 5 ||
                selected.description.length > 500 ? true : false
            }
            >
            Save
        </Button>
    </div>
    );
}