import React from 'react';
import NoteContainer from './components/NoteContainer/NoteContainer';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <NoteContainer/>
    </div>
  );
}

export default App;
