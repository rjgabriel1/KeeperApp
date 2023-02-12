import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <>
      <Header />
      {/* render every note from notes  */}
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}

      <Footer />
    </>
  );
}

export default App;

