import { configureStore } from "@reduxjs/toolkit";
import playListSliceReducer from "./PlaylistSlice";
import playerReducer from "./PlayerSlice";

export const store = configureStore({
  reducer: {
    playlist: playListSliceReducer,
    player: playerReducer,
  },
});
