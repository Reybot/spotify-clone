import { configureStore } from "@reduxjs/toolkit";
import playlistSliceReducer from "./PlaylistSlice";
import playerReducer from "./PlayerSlice";

export const store = configureStore({
  reducer: {
    playlist: playlistSliceReducer,
    player: playerReducer,
  },
});
