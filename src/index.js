import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./theme/material-theme";
import { BrowserRouter } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { redirectURL } from "./config/config";
import { Provider } from "react-redux";
import { store } from "./store/store";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  redirectUri: redirectURL,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={themeOptions}>
          <App spotifyApi={spotifyApi} />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
