import React, { useState, useEffect } from 'react';
import NotesList from './NotesList';
import NoteDetails from './NoteDetails';
import Sorting from './Sorting';
import Search from './Search';
import './App.css';
import uuid from "react-uuid";

export default function App() {
  const [notes, setNotes] = useState([{id: uuid(), title: 'New note', description: '', creationDate: Date.now()}]);
  const [selected, setSelected] = useState(0);
  const [titleClicks, setTitleClicks] = useState(0);
  const [dateClicks, setDateClicks] = useState(0);

  useEffect(() => {
    if(localStorage.getItem("notes")) {
      setNotes(JSON.parse(localStorage.getItem("notes")));
    }
  }, []);

  const saveNotes = () => {
    localStorage.clear();
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const createNote = () => {
    const newNote = {id: uuid(), title: 'New note', description: '', creationDate: Date.now()}
    notes.unshift(newNote);
    setNotes([...notes]);
    setSelected(newNote)
    saveNotes();
  };

  const removeNote = (id) => {
    const selectedIndex = notes.findIndex((note) => {
      return note.id === id;
    });
    setNotes(notes.filter(note => note.id !== id));
    notes && selectedIndex > 0 ? setSelected(notes[selectedIndex-1]) : setSelected(0);
    saveNotes();
  };

  const updateNote = (updatedNote) => {
    notes.map((note, index) => {
      if(note.id === selected.id) {
        notes[index] = updatedNote;
        setNotes([...notes]);
      }
    });
    saveNotes();
  };

  const sortByTitle = () => {
    setTitleClicks(titleClicks + 1);
    notes.sort(titleClicks % 2 === 0 ? (a, b) => a.title.localeCompare(b.title) : (b, a) => a.title.localeCompare(b.title))
    setNotes([...notes]);
  };

  const sortByDate = () => {
    setDateClicks(dateClicks + 1);
    notes.sort(dateClicks % 2 === 0 ? 
      (a, b) => a.creationDate.toString().localeCompare(b.creationDate.toString()) : 
      (b, a) => a.creationDate.toString().localeCompare(b.creationDate.toString()))
    setNotes([...notes]);
  };

  const findNote = (keyword) => {
    notes.map((note) => {
      if(note.title.toLowerCase().includes(keyword.toLowerCase())) {
        setSelected(note);
        return 0;
      }
    });
  };

  return (
    <div className="app">
      <div className="appBar">
            <Sorting sortByTitle={sortByTitle} sortByDate={sortByDate}/>
            <Search findNote={findNote}/>
      </div>
      <div className="main">
        <NotesList notes={notes} createNote={createNote} selected={selected} setSelected={setSelected}/>
        <NoteDetails 
          selected={selected} 
          setSelected={setSelected} 
          removeNote={removeNote} 
          notesAmount={notes.length}
          updateNote={updateNote}
          />
      </div>
    </div>
  );
}