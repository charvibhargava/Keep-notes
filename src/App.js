import React, { useEffect, useState } from 'react';
import NoteContainer from './components/NoteContainer/NoteContainer';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  const addNote=(color)=>{
    const tempNotes=[...notes]
    tempNotes.push({
      id:Date.now()+"" +Math.floor(Math.random()*78),
      text:"",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes=[...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index<0) return;

    tempNotes.splice(index,1);
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]
  )

  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
