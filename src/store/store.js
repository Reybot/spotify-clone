import { configureStore } from "@reduxjs/toolkit";
import playListSliceReducer from "./playlistSlice";
import playerReducer from "./PlayerSlice";

export const store = configureStore({
  reducer: {
    playlist: playListSliceReducer,
    player: playerReducer,
  },
});
