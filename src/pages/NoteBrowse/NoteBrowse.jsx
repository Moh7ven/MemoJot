import { SearchBar } from "components/SearchBar/SearchBar";
// import s from "./style.module.css";
import { NoteList } from "containers/NoteList/NoteList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function NoteBrowse() {
  const [searchText, setSearchText] = useState("");

  const noteList = useSelector((store) => store.NOTE.noteList);
  const filteredNoteList = noteList.filter((note) => {
    const containsTitle = note.title
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    const containsContent = note.content
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    return containsTitle || containsContent;
  });

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
          <SearchBar
            placeholder="Search for a note"
            onTextChange={setSearchText}
          />
        </div>
      </div>
      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            No notes available, can you <Link to={"/note/new"}>add one </Link> ?
          </span>
        </div>
      )}
      <NoteList noteList={filteredNoteList} />
    </>
  );
}
