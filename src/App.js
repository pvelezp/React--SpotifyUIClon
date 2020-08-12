import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("me!", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify
        .getPlaylist(
          "BQA-cgvX6Jp-vtfg35TdHN8b6evnt3qsPal07PS_FDF2UUehrCIY73hnTxhvTgD4FyLVyS6-_a51jfy0-hNgl6gEh-XdpHYWaBWZPHZeZQQtGBE-N4Cxyv1cOp3-RzWhyeZzYds9G-MFFyQP8PluwzcyyN-oy1uvByX8ADaVLgvcPIv5SY2Q"
        )
        .then((response) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        });
    }
  }, []);

  console.log("me", user);
  console.log("my token is:", token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
