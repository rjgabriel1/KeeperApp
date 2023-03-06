import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateNote(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //this function handle value from the inputs.
  function handleChange(event) {
    const { name, value } = event.target;
    //Update the intial state by returning a new object.
    setNote((initialNote) => {
      return {
        ...initialNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    //clear entry fields after adding notes
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }
  return (
    <>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder="Title"
          ></input>
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          value={note.content}
          rows={isExpanded ? 3 : 1}
          placeholder="Add new note..."
        ></textarea>

        <Zoom in={isExpanded}>
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </>
  );
}

export default CreateNote;
