import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./Note/note-slice";

export const store = configureStore({
  reducer: {
    NOTE: noteReducer,
  },
});
