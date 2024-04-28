import { NoteApi } from "api/note-api";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/Note/note-slice";
import s from "./style.module.css";

export function App() {
  const dispatch = useDispatch();
  async function fetchAllNotes() {
    const noteList = await NoteApi.fetchAll();
    dispatch(setNoteList(noteList.data));
  }
  useEffect(() => {
    fetchAllNotes();
    //Tableau vide parce qu'on appelle la fonction une seule fois
  });

  return (
    <div className="container-fluid">
      <Header />
      <div className={s.outlet_container}>
        <Outlet />
      </div>
    </div>
  );
}
