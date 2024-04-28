import { NoteForm } from "components/NoteForm/NoteForm";
import s from "./style.module.css";
import { NoteApi } from "api/note-api";
import { useDispatch } from "react-redux";
import { addNote } from "store/Note/note-slice";
import { useNavigate } from "react-router-dom";

export function NoteCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function createNote(formValues) {
    const createdNote = await NoteApi.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNote(createdNote.data));
    navigate("/");
  }
  return (
    <div className={s.container}>
      <NoteForm title="Create a new note" onSubmit={createNote} />
    </div>
  );
}
