import React from "react";
import NotesIcon from "@mui/icons-material/Notes";

function Header() {
  const appName = "Keeper";
  return (
    <header>
      <h1>
        {" "}
        <NotesIcon /> {appName}
      </h1>
    </header>
  );
}

export default Header;
