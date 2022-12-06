import React, { useState, useEffect } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import SongTable from "../components/SongTable";

const Playlist = ({ spotifyApi }) => {
  const { id } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState({});
  const { songs, setSongs } = useState([]);
  console.log(spotifyApi);

  useEffect(() => {
    async function getSongs() {
      const data = await spotifyApi.getPlaylist(id);
      console.log(data);
      setPlaylistInfo({ name: data.body.name, image: data.body.images[0].url });
      setSongs(data.body.tracks.items);
    }
    getSongs();
  }, [id, spotifyApi]);

  return (
    <Box
      sx={{
        color: "#fff",
        bgcolor: "background.paper",
        flex: 1,
        overflowY: "auto",
      }}
    >
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          background: "linear-gradient(#121212, #f0790070)",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
          alignItems: {
            xs: "flex-start",
            md: "flex-end",
            xl: "center",
          },
          boxSizing: "border-box",
          gap: 3,
        }}
      >
        <Avatar
          src={playlistInfo?.image}
          variant="square"
          sx={{
            width: { xs: "100%", md: 235 },
            height: { xs: "100%", md: 235 },
            maxWidth: 235,
          }}
        />
        <Box>
          <Typography
            sx={{ fontSize: 12, fontWeight: "bold", color: "text.primary" }}
          >
            Playlist
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            {playlistInfo?.name}
          </Typography>
        </Box>
      </Box>
      <SongTable />
    </Box>
  );
};

export default Playlist;
