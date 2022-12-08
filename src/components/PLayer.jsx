import { Grid, Box, Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAccessTokenFromStorage } from "../utils/getAccessTokenFromStorage";
import PlayerControls from "./PlayerControls";
import PlayerVolume from "./PlayerVolume";

const Player = ({ spotifyApi }) => {
  const track = {
    name: "",
    album: {
      images: [{ url: "" }],
    },
    artists: [{ name: "" }],
  };

  const [localPlayer, setPlayer] = useState(null);
  const [is_paused, setPaused] = useState(false);
  const [current_track, setTrack] = useState(track);
  const [device, setDevice] = useState(null);
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState(null);

  /* ----- set script and get instance ----- */

  console.log(current_track);

  useEffect(() => {
    const token = getAccessTokenFromStorage();

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID");
        setDevice(device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state || !state.track_window?.current_track) {
          return;
        }
        const duration_ms = state.track_window.current_track.duration_ms / 1000;
        const position_ms = state.position / 1000;
        setDuration(duration_ms);
        setProgress(position_ms);
        setTrack(state.track_window.current_track);
        setPaused(state.paused);
      });

      player.connect();
    };
  }, []);

  /* ----- Connect and disconnect player ----- */

  useEffect(() => {
    if (!localPlayer) return;
    localPlayer.connect();

    return () => {
      localPlayer.disconnect();
    };
  }, [localPlayer]);

  /* ----- Transfer Playback ----- */

  useEffect(() => {
    console.log("hej hej");
    const transferMyPlayback = async () => {
      if (device) {
        await spotifyApi.transferMyPlayback([device], true);
      }
    };

    const getDeviceFromApi = async () => {
      await spotifyApi.getMyDevices();
    };
    transferMyPlayback();
    getDeviceFromApi();
  }, [device, spotifyApi]);

  return (
    <Box>
      <Grid
        container
        px={3}
        sx={{
          bgcolor: "Background.paper",
          height: 100,
          cursor: { xs: "pointer", md: "auto" },
          width: "100%",
          borderTop: "1px solid #292929",
        }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRbVygZrmKYrNyzTKfcv1UcsKBBvKbQWvIA&usqp=CAU"
            }
            alt={"#"}
            variant="square"
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary", fontSize: 14 }}>
              Baby
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
              Justin Bieber
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: { xs: "flex-end", md: "center" },
            alignItems: "center",
          }}
        >
          <PlayerControls />
        </Grid>
        <PlayerVolume />
      </Grid>
    </Box>
  );
};

export default Player;
