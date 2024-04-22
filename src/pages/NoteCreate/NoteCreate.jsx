import { NoteForm } from "components/NoteForm/NoteForm";
import s from "./style.module.css";

export function NoteCreate() {
  return (
    <div className={s.container}>
      <NoteForm title={"Create a new note"} />
    </div>
  );
}
