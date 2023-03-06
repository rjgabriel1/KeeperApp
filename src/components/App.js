import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";




function App() {
  const [arrNotes,setNotes]=useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
     return [...prevNotes,newNote]
   })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
    }) }) 
  }
  return (
    <>
      <Header />
      <CreateNote onAdd={ addNote} />
      {/* render every note from ArrNotes  */}
      {arrNotes.map((note,index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      ))}

      <Footer />
    </>
  );
}

export default App;

