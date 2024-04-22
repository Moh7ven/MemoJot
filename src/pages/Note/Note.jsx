import { useParams, useSearchParams } from "react-router-dom";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";

export function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();
  // const [searchParams] = useSearchParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );

  function submit() {}

  return (
    <>
      {/* {searchParams.get("truc")} */}
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit Note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => ""}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
