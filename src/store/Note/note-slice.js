import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    addNote: (currentSlice, action) => {
      currentSlice.noteList.push(action.payload);
    },
    updateNote: (currentSlice, action) => {
      const indexToUpdate = currentSlice.noteList.findIndex(
        (note) => note._id === action.payload._id
      );
      currentSlice.noteList[indexToUpdate] = action.payload;
    },
    deleteNote: (currentSlice, action) => {
      const filteredNoteList = currentSlice.noteList.filter(
        (note) => note._id !== action.payload
      );
      currentSlice.noteList = filteredNoteList;
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { setNoteList, addNote, updateNote, deleteNote } =
  noteSlice.actions;
