import axios from "axios";

const BASE_URL = "http://localhost:3000/MemoJot/api/v1";

export class NoteApi {
  static async create(note) {
    /* return this.formatId((await axios.post(`${BASE_URL}/addNote`, note)).data); */
    return (await axios.post(`${BASE_URL}/addNote`, note)).data;
  }
  static async fetchAll() {
    return (await axios.get(`${BASE_URL}/getAllNotes`)).data;
  }
  static async fetchById(noteId) {
    return this.formatId(
      (await axios.get(`${BASE_URL}/getNoteById/${noteId}`)).data
    );
  }
  static async deleteById(noteId) {
    return (await axios.delete(`${BASE_URL}/deleteNote/${noteId}`)).data;
  }
  static async update(note) {
    /* return this.formatId(
      (await axios.patch(`${BASE_URL}/${note.id}`, note)).data */
    return (await axios.patch(`${BASE_URL}/updateNote/${note.id}`, note)).data;
  }

  /* static formatId(note) {
    return {
      ...note,
      id: note.id.toString(),
    };
  } */
}
