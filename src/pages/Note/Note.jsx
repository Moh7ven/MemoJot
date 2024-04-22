import { useParams, useSearchParams } from "react-router-dom";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export function Note(props) {
  const { noteId } = useParams();
  const [searchParams] = useSearchParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );
  console.log(note);
  return <>{searchParams.get("truc")}</>;
}
