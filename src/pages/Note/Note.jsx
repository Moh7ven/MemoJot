import { useParams, useSearchParams } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { NoteApi } from "api/note-api";
import { updateNote } from "store/Note/note-slice";

export function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();
  const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );

  async function submit(formValues) {
    const updatedNote = await NoteApi.update({ ...formValues, id: note.id });

    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }

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
