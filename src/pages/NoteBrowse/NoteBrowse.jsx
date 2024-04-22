import s from "./style.module.css";
import { NoteList } from "containers/NoteList/NoteList";

export function NoteBrowse() {
  return (
    <div className={s.container}>
      <NoteList />
    </div>
  );
}
