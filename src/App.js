import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NotesList from './NotesList';
import NoteDetails from './NoteDetails';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([{title: 'drtfyguhjkcd gdcdscdsgvcgdsgvcdsvgsdgvgdsjvjsdvhjsgj', description: 'Test description', creationDate: new Date().toLocaleTimeString()}]);
  const [active, setActive] = useState();

  useEffect(() => {
  }, []);

  const createNote = () => {
    setNotes((notes) => [...notes, {title: 'New note', description: '', creationDate: new Date().toLocaleTimeString()}]);
  };

  return (
    <div>
    <AppBar position="static">
      <Toolbar>
    
      </Toolbar>
    </AppBar>
    {/* <Button variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={createNote}
        >
          New
    </Button> */}

    <div className="main">
      <NotesList notes={notes} createNote={createNote}/>
      <NoteDetails />
    </div>

    </div>
  );
}