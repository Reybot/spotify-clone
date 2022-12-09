import React, { useEffect, useState } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import SongTable from "../components/SongTable";

export default function Playlist({ spotifyApi }) {
  const { id } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSongs() {
      setLoading(true);
      const data = await spotifyApi.getPlaylist(id);

      setPlaylistInfo({
        name: data.body.name,
        image: data.body.images[0].url,
      });
      setSongs(data.body.tracks.items);
      setLoading(false);
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
          width: "100%",
          background: "linear-gradient(#121212, #f0790070)",
          display: "flex",
          justifyContent: "flex-start",
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
            sx={{
              fontSize: 12,
              fontWeight: "bold",
              color: "text.primary",
            }}
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
      <SongTable songs={songs} loading={loading} spotifyApi={spotifyApi} />
    </Box>
  );
}
